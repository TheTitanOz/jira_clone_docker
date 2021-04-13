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

## License

[MIT](https://opensource.org/licenses/MIT)

<hr>

<h3>
  <a href="https://github.com/oldboyxx/jira_clone">Proyecto base, protegido por licencia.</a> |
</h3>
