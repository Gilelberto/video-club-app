# Usa una imagen de Node.js como base
FROM node

# Establece el directorio de trabajo dentro del contenedor
WORKDIR HOME /app

# Copia el código de la aplicación al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que se ejecuta tu aplicación Express
EXPOSE 3000

ENTRYPOINT npm start
