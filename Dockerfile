# Usa una imagen de Node.js como base
FROM node:19

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código de la aplicación al contenedor
COPY . .

# Expone el puerto en el que se ejecuta tu aplicación Express
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "start"]
