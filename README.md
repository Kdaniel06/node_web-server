# Node.js Web Service for Static Apps
Este es un servidor web básico hecho con Node.js y Express para servir aplicaciones estáticas. El proyecto incluye la posibilidad de configurar el puerto y la ruta pública mediante variables de entorno.

## Características
* Servidor web basado en Express para servir archivos estáticos desde una carpeta pública.
* Configuración mediante archivo .env para definir el puerto y la carpeta de archivos públicos.
* Soporte para redirección a index.html en rutas no encontradas.

## Requisitos
Asegúrate de tener instalado lo siguiente:

* Node.js v16+.
* npm, que suele instalarse con Node.js.

## Instalación
1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. Instala las dependencias necesarias usando npm:

    ```bash
    npm install
    ```

3. Crea un archivo .env basado en el archivo env.template. Este archivo definirá el puerto y la ruta de archivos estáticos:

    ```bash
    cp env.template .env
    ```

4. Luego, edita el archivo .env según tus necesidades:

    ```makefile
    PORT=3000
    PUBLIC_PATH=public
    ```

## Estructura del proyecto
* **src/:** Contiene el código fuente del servidor.
    * **app.js:** Punto de entrada principal.
    * **config/:** Contiene la configuración del entorno.
        * **env.js:** Carga las variables del entorno.
    * **server/:** Contiene la configuración del servidor Express.
        * **server.js:** Configuración y arranque del servidor.
* **public/:** Carpeta donde se ubican los archivos estáticos que se van a servir, como index.html.

## Uso
1. Ejecuta el servidor en modo desarrollo:

    ```bash
    npm run dev
    ```

    El servidor arrancará en el puerto especificado en el archivo .env (por defecto, 3000). Puedes acceder a la aplicación estática navegando a http://localhost:3000.

2. Si deseas cambiar el puerto o la ruta pública, modifica las variables en el archivo .env:

    ```bash
    PORT=8080
    PUBLIC_PATH=my-static-folder
    ```

## Despliegue
Para desplegar el servidor en producción, puedes utilizar plataformas como Heroku, Vercel o cualquier proveedor que soporte Node.js.

Establece el puerto y la ruta pública de producción en el archivo .env.

Ejecuta el servidor en modo producción:

```bash
npm start
```