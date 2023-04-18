# Node.js Web Scraping Example

Este código es un ejemplo de cómo se puede utilizar Node.js para hacer una solicitud HTTP a un sitio web y analizar el contenido HTML de la respuesta. El código requiere dos bibliotecas de Node.js: `cheerio` y `request-promise`. `cheerio` es una biblioteca que se utiliza para analizar y manipular el contenido HTML, similar a la forma en que se utiliza jQuery en el navegador. `request-promise` es una biblioteca que se utiliza para hacer solicitudes HTTP a sitios web.

En el código, se define una función `init()` que es asíncrona, lo que significa que la función espera a que una tarea asíncrona se complete antes de continuar con la ejecución del código. Dentro de esta función, se hace una solicitud HTTP al sitio [*quotes.toscrape*](http://quotes.toscrape.com/) utilizando la biblioteca `request-promise`. La respuesta HTML del sitio se almacena en una variable llamada `respuesta`.

El código está comentado en la línea 5, donde se muestra la estructura del HTML de la página web que se está raspando. Sin embargo, esta línea está comentada y no se ejecutará a menos que se quite el comentario.

En resumen, este código utiliza `cheerio` y `request-promise` para hacer una solicitud HTTP a un sitio web y analizar el contenido HTML de la respuesta.

## Iniciar proyecto en Node.js
- create new terminal | ctrl + shift + 5
- `npm init -y` crea un archivo llamado `package.json` que describe nuestro script:
  - Cual es su script principal
  - Como podemos arrancarlo
  - Lista sus dependencias

## Instalar las dependencias
- `npm install cheerio`
- `npm install request`
- `npm install request-promise`
- `npm i fs-extra`

O en su defecto `npm i cheerio request request-promise fs-extra`

##
[***Cheerio***](https://cheerio.js.org/docs/basics/loading): Permite escanear un sitio web
  
[***Request npm***](https://www.npmjs.com/package/request): Permite hacer peticiones http y traer la información de la página. Utiliza Async/Await.
  
[***Request-promise***](https://www.npmjs.com/package/request): Permite manejar peticiones http y manejar las respuestas utilizando funciones asincronas.
  
[***fs-extra***](https://www.npmjs.com/package/fs-extra) (File System Extra): Permite crear y guardar documentos utilizando Async/Await.

[*toscrape.com*](https://toscrape.com/): Posee sitios web que puedes analizar de forma cencilla.

## Ejecutar el script
 `node index.js`


