<h1 align="center">Aplicación Jira-clone, para Docker y kubernetes en GCLOUD</h1>

<div align="center">Proyecto clonado de [oldboyxx/gira_clone](https://github.com/oldboyxx/jira_clone)</div>

## Features
- Proyecto se puede montar de manera local utilizando `npm` o `yarn`, revisar [original](https://github.com/oldboyxx/jira_clone).
- Proyecto monta docker utilizando proxyreverso, de manera local.
- Es posible levantar el proyecto en kubernetes, pedir archivos de despliegue.

## Develop en docker 🛠

- Instala [DOCKER](https://www.docker.com/get-started).
- Clona el repositorio: `git clone https://github.com/TheTitanOz/jira_clone_docker.git`.
- Accede al repositorio `cd jira_clone_docker`.
- Desplegamos `mariadb` utilizando docker `docker run --name mariadbcontainer -e MYSQL_ROOT_PASSWORD=<user_password> -e MYSQL_DATABASE=<database_name> -p 3306:3306 -d mariadb:latest`.
- Crea los archivos `.env` basándote de los archivos `.env.example` del repositorio de `api` y de `client`.
- Accedemos al repositorio de api `cd api` y creamos la imagen `docker build . -t jiraprojectapiimg` y luego la deplegamos `docker run --name apicontainer --env-file=.env -d jiraprojectapiimg`.
- Accedemos al repositorio de client `cd client` y creamos la imagen `docker build . -t jiraprojectclientimg` y luego la deplegamos `docker run --name clientcontainer --env-file=.env -p 8080:8080 -d jiraprojectclientimg`.
- Finalmente, accedemos `http://localhost:8080/`

## Kubernetes y secretos

- Habilita la opción de Kubernetes en DOCKER `Docker->Settings->Kubernetes->Enable Kubernetes`.
- Creamos los secretos básicos básados en el archivo `.env.example` con el comando `kubectl create secret generic db-credentials --from-literal=NODE_ENV=production --from-literal=JWT_SECRET=productionjwt_secretkey --from-literal=PORT=3000 --from-literal=DB_HOST=localhost --from-literal=DB_PORT=3306 --from-literal=DB_USER=<user> --from-literal=DB_PASS=<user_password> --from-literal=DB_NAME=<database_name> -n nsjiraproject`.
- Reemplazamos el archivo `nginx.conf` con el archivo `nginx.kubernete.conf`.
- Accedemos al repositorio de api `cd api` y creamos la imagen `docker build . -t <image_api>`.
- Abrimos el archivo `deployment.api.yaml` y cambiamos `29: image: <image_api>` por el nombre del tag que creamos la imagen.
- Finalmente, se ejecutan los archivos de `deployment` y de `service` respectivamente. `kubectl apply -f deployment.api.yaml` y `kubectl apply -f service.api.yaml`.
- Repetimos para cliente.
- En el caso del cliente, la creación de los secretos es `kubectl create secret generic front-credentials --from-literal=NODE_ENV=production -n nsjiraproject`.
- Continuamos con los pasos de creación de imagen y de modificación de archivo `deployment.client.yaml`.

## License

[MIT](https://opensource.org/licenses/MIT)

<hr>

<h3>
  <a href="https://github.com/oldboyxx/jira_clone">Proyecto base, protegido por licencia.</a> |
</h3>
