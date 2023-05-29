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

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

Deploy
https://www.baeldung.com/docker-local-images-minikube
https://phoenixnap.com/kb/postgresql-kubernetes
# minikube
Start docker first
# start minikube
minikube start
# check if docker CLI is working
docker version
# configure the docker CLI and excute configuration
minikube docker-env
eval $(minikube -p minikube docker-env)
# list available images
minikube image ls --format table
# Build docker images:
docker build --file=frontend.dockerfile  -t art-web-frontend:latest .
docker build --file=backend.dockerfile  -t art-web-backend:latest .
# Remove old image and load new image to minikube
minikube image rm art-web-frontend:latest
minikube image load art-web-frontend:latest

minikube image rm art-web-backend:latest
minikube image load art-web-backend:latest
# create pods/deploment/services(in minikube dir)
kubectl apply -f postgres-pv-pvc.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-service.yaml
kubectl apply -f backend-service.yaml
# Deploy Helm Chart PSQL
helm repo list
helm install my-postgres bitnami/postgresql --set persistence.existingClaim=postgres-pv-pvc
# Uninstall helm chart
helm uninstall my-postgres
# port forwarding
pkill postgres
kubectl port-forward --namespace default svc/my-postgres-postgresql 5432:5432
# if port is in use, identify what is running in port 5432
lsof -i :5432
# kill the processes
kill -9 <pid>

# Connect to postgreSQL client
# Export the POSTGRES_PASSWORD environment variable to be able to log into the PostgreSQL instance
export POSTGRES_PASSWORD=$(kubectl get secret --namespace default my-postgres-postgresql -o jsonpath="{.data.postgres-password}" | base64 --decode)
# To see the password
echo $POSTGRES_PASSWORD
# Inspect secret's details
kubectl describe secret my-postgres-postgresql --namespace default
# Download local database
pg_dump -U lshi -d artporfolio -f dump.sql
# Copy the dump file to the Minikube cluster (in server dir)
kubectl cp dump.sql my-postgres-postgresql-0:/tmp/dump.sql
# Run the SQL script to execute the SQL statements and recreate the table in the PostgreSQL database
kubectl exec -it my-postgres-postgresql-0 -- psql -U postgres -d artporfolio -f /tmp/dump.sql -W

# Check what is in the app dir in docker container
kubectl exec -it backend-deployment-78c7667566-tqzbl -- ls /app

# Access the site:
# loadbalancer can be exposed via minikube tunnal
minikube tunnel
# Get external IP
kubectl get svc
# Browser
http://REPLACE_WITH_EXTERNAL_IP:8000(backend)
http://127.0.0.1:8000

