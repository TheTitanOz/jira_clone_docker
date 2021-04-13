# etapa de compilación
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# etapa de producción
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
# sobreescribo la configuración del nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080