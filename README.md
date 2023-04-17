## Node.js Web Scraping Example

Este código es un ejemplo de cómo se puede utilizar Node.js para hacer una solicitud HTTP a un sitio web y analizar el contenido HTML de la respuesta. El código requiere dos bibliotecas de Node.js: `cheerio` y `request-promise`. `cheerio` es una biblioteca que se utiliza para analizar y manipular el contenido HTML, similar a la forma en que se utiliza jQuery en el navegador. `request-promise` es una biblioteca que se utiliza para hacer solicitudes HTTP a sitios web.

En el código, se define una función `init()` que es asíncrona, lo que significa que la función espera a que una tarea asíncrona se complete antes de continuar con la ejecución del código. Dentro de esta función, se hace una solicitud HTTP al sitio `http://quotes.toscrape.com/` utilizando la biblioteca `request-promise`. La respuesta HTML del sitio se almacena en una variable llamada `respuesta`.

El código está comentado en la línea 5, donde se muestra la estructura del HTML de la página web que se está raspando. Sin embargo, esta línea está comentada y no se ejecutará a menos que se quite el comentario.

En resumen, este código utiliza `cheerio` y `request-promise` para hacer una solicitud HTTP a un sitio web y analizar el contenido HTML de la respuesta.
