# art-porfolio

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
# Deploy
https://www.baeldung.com/docker-local-images-minikube
https://phoenixnap.com/kb/postgresql-kubernetes
# Start docker and minikube
1. Start docker first
2. Start minikube
    `minikube start`
3. Check if docker CLI is working
    `docker version`
4. Configure the docker CLI and excute configuration
    `minikube docker-env`
    `eval $(minikube -p minikube docker-env)`
# Build and load docker image, created deployment and services
1. List available images
    `minikube image ls --format table`
2. Build docker images:
    `docker build --file=frontend.dockerfile  -t art-web-frontend:latest .`
    `docker build --file=backend.dockerfile  -t art-web-backend:latest .`
3. Remove old image and load new image to minikube
    `minikube image rm art-web-frontend:latest`
    `minikube image load art-web-frontend:latest`

    `minikube image rm art-web-backend:latest`
    `minikube image load art-web-backend:latest`
4. Create deploment and service
    `kubectl apply -f postgres-pv-pvc.yaml`
    kubectl apply -f frontend-deployment.yaml
    kubectl apply -f backend-deployment.yaml
    kubectl apply -f frontend-service.yaml
    kubectl apply -f backend-service.yaml
# Deploy Helm Chart PSQL
    `helm repo list`
    (need to apply pv-pvc before installing posgtres for persistent volume)
    `helm install my-postgres bitnami/postgresql --set persistence.existingClaim=postgres-pv-pvc`
    If re-deploying the PSQL helm chart, pvc, pv, and secretes must be deleted first, because the configured password will be ignored on new installation in case when previous Posgresql release was deleted through the helm command. In that case, old PVC will have an old password, and setting it through helm won't take effect. Deleting persistent volumes (PVs) will solve the issue.
# Uninstall helm chart
    `helm uninstall my-postgres`
# Restore databse in postgress pod
1. Connect to postgreSQL client
    `psql -U postgres -p 55432 -h localhost -d postgres -c 'CREATE DATABASE artporfolio'`
    (then enter the password for user postgres, password is in secrete)
2. Download local database
    `pg_dump -U lshi -d artporfolio -f dump.sql --format=custom`
   The following two commands also download the local database but in a text format, not sql:
    `pg_dump -U lshi -d artporfolio -f dump.sql`
    `pg_dump -U lshi artporfolio > dump.sql`
3. Restore database in postgres pod
    `pg_restore -U postgres  -p 55432 -h localhost --no-owner -d artporfolio dump.sql`
# Port forwarding (forwarding port to allow the local machine to access the private cluster)
1. If port is in use, identify what is running in port 5432
    `lsof -i :5432`
2. Kill the processes
    `kill -9 <pid>`
    `pkill postgres`
3. Forward database port:
    `kubectl port-forward --namespace default svc/my-postgres-postgresql 55432:5432`
4. Forward frontend port:
    `kubectl port-forward --namespace default svc/frontend-service 5173:80`
5. Forward backend port:
    `kubectl port-forward --namespace default svc/backend-service 8080:8000`
# Access the site:
1. Loadbalancer can be exposed via minikube tunnal
    `minikube tunnel`
2. Get external IP
    `kubectl get svc`
3. Open browser
    http://REPLACE_WITH_EXTERNAL_IP:8000(backend)
    http://127.0.0.1:8000

# Connect to postgres pod via the backend pod shell
1. Install posgtgres cli
    `apk add postgresql`
2. Connect to postgres pod
    `psql -h my-postgres-postgresql.default.svc.cluster.local -p 5432 -U postgres artporfolio`
3. Enter the password for user postgres (password can be found in ConfigMap - secrete)

# Other commands:
### Check what is in the app dir in docker container
`kubectl exec -it backend-deployment-78c7667566-tqzbl -- ls /app`
### Export and echo the POSTGRES_PASSWORD environment variable
`export POSTGRES_PASSWORD=$(kubectl get secret --namespace default my-postgres-postgresql -o jsonpath="{.data.postgres-password}" | base64 --decode)`
`echo $POSTGRES_PASSWORD`
### Inspect secret's details
`kubectl describe secret my-postgres-postgresql --namespace default`
### Copy the dump file to the Minikube cluster
`kubectl cp dump.sql my-postgres-postgresql-0:/tmp/dump.sql`
### Run the SQL script to execute the SQL statements and recreate the table in the PostgreSQL database
`kubectl exec -it my-postgres-postgresql-0 -- psql -U postgres -d artporfolio -f /tmp/dump.sql -W`

Note: pg_hba.config is in `/opt/homebrew/var/postgresql@12`

TO DO:
1. Create a secret yaml file for username, and mount as environment variable in the backen deployment, mount the password from the helm deployment config map (helm chart creates its own password)
    - reference the username and passward using the environment variable (shell to the backend pod to find them `env`)
2. Create a configMap file for db host, and host name? (example: host: 'new-postgres-postgresql.default.svc.cluster.local')
3. Create a make file to run the command easier

It is ok to use port forward for local deployment(it point a port from the local machine to the pod port).Otherwise, need to use loadbalancer(ingress) to direct the outside traffic to the cluster.


