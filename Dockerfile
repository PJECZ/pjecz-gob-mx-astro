# Usar Node.js versión 22
FROM node:22-alpine AS build
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
RUN npm ci

# Copiar el resto del código
COPY . .

# Compilar
RUN npm run build

# Copiar a producción
FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
