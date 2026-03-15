# Parcial-Desarrollo-Web
![Static Badge](https://img.shields.io/badge/JavaScript-yellow?logo=javascript&logoColor=white)

## **Índice**
1. [**Descripción**](#descripción)
2. [**Instalación**](#instalación)
3. [**Herramientas Utilizadas**](#herramientas-utilizadas)
4. [**Uso**](#uso)
5. [**Requisitos**](#requisitos)
6. [**Licencia**](#licencia)
7. [**Autores**](#autor)

# **Descripción**
Este parcial consta de la creación de un backend basico con la capacidad de creacion de usuarios basados en roles los cuales tienen la capacidad de ingresar articulos y solicitarlos, al hacerlo se podran ver los articulos ingresados de manera general y definidos por el id de cada uno.
hablando un poco sobre la estructura del backend encontramos varias carpetas con varios archivos en lenguaje de programación **javascript** los cuales se encargan de cumplir las funciones necesarias para el correcto funcionamiento del proyecto, los archivos de cada carpeta son llamados **users** y **articles** los cuales a pesar de llamarse igual cumplen con una función diferente (por esto se reparten en carpetas) a continuación tendremos una explicación de cada carpeta con sus respectivos archivos:

- **Carpeta controllers**: los archivos de esta carpeta se encargan de cumplir ciertas funciones dependiendo si hablamos de los usuarios o de los articulos, en el caso de los usuarios cumplen dos funciones como lo son registrar e ingresar una cuenta, mientas que en el caso de los articulos veremos funciones como crear un articulo, consultar todos los articulos o consultarlos por medio de su id, cada una de las funciones mencionadas tienen codigos de error que se lanzan en consola en caso de no cumplir con los parametros necesarios.
- **Carpeta data**: en esta carpeta encontramos algunos archivos predeterminados que se encuentran guardados en una base de datos creada en mongodb, asi mismo cuenta con un archivo de texto que contiene algunos uuarios de prueba para usar el codigo (estos usuarios estan divididos en las categorias de admin y standar).
- **helpers**: en esta carpeta veremos un archivo llamado **auth.js** el cual se encarga de crear tokens y codificarlos para mantenerlos en secreto, asi mismo se encarga de validar el token usado y enviar notificaciones en caso de que no se haya enviado ningun token, sea invalido o cuando expire el tiempo de uso estipulado que en este caso son 15 minutos.
- **Carpeta models**: los archivos de esta carpeta se encargan de estipular la estructura que se debe usar a la hora de utilizar el programa, por ejemplo, la forma en la que debemos escribir las consultas para registrar un usuario.
- **Carpeta routes**: Los archivos de esta carpeta se encargan de brindarnos una coneccion entre el programa, la base de datos en mongo db y el ejecutor que podria ser postman o thunder.

# **Instalación**
1. Debes asegurarte de tener instalado la ultima version de JavaScript
2. En este caso estamos usando el entorno de programación Visual studio code para mayor comodidad pero puedes usar el entorno con el que mejor te sientas
3. Clona el repositorio con el siguiente comando
   ```bash
      https://github.com/Mogollo7/Parcial-Desarrollo-Web.git
4. abre una terminal y usa el comando npm install

# **Herramientas utilizadas**
- **JavaScript**: Lenguaje de programación usado para crear paginas web interactivas, es decir, con diversas funcionalidades dentro de las mismas

# **Uso**
Para usar este programa necesitaremos este codigo ejecutandolo en el entorno de programacion de su preferencia (recomendamos visual studio code), postman o thunder para usar el codigo y mongo db para la base de datos.
en postman o thunder haremos varias consultas, para esto usaremos los datos proporcionados en el archivo **usuarios.txt** situeado en la **Carpeta data**, con estos podremos hacer un log in con alguna de las cuentas ya registradas por defecto o podemos registrar una nueva usando la estructura que encontramos en el archivo **users.js** de la **carpeta models**.
una ves hayas hecho el log in tendras 15 minutos para crear articulos y/o consultarlos, asi mismo cada nuevo articulo o usuario que crees se va a guardar automaticamente en una base de datos que crees y conectes en mongo db

# **Requisitos**
- **JavaScript**

# **Licencia**
Este proyecto está licenciado bajo la **MIT License**.

# **Autores**
- [Juan Sebastian Martínez Galeano]
- [Samuel Usma Brand]
- [Cesar Alberto Ocampo Raigosa]
