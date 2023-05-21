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
# minikube
Start docker first
# start minikube
minikube start
# check if docker CLI is working
docker version
# configure the docker CLI
minikube docker-env
# excute configuration
eval $(minikube -p minikube docker-env)
# list available images
minikube image ls --format table
# Build docker containers:
docker build --file=frontend.dockerfile  -t art-web-frontend:latest .
docker build --file=backend.dockerfile  -t art-web-backend:latest .
# create pods/deploment/services(in minikube dir)
kubectl apply -f postgres-pv-pvc.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-service.yaml
kubectl apply -f backend-service.yaml

# Helm Chart PSQL
helm repo list
helm install my-postgres bitnami/postgresql --set persistence.existingClaim=postgres--pv-pvc
