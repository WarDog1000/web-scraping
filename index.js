// bibliotecas necesarias para poder alanilzar el sitio web
const cheerio = require('cheerio'),
      request = require('request-promise')

// async function init() {
//   // hace una peticion al sitio http://quotes.toscrape.com/
//  const respuesta = await request('http://quotes.toscrape.com/')
// //  console.log(respuesta) // imprime por consola, la estructura del html
// }

async function init() {
  // hace una peticion al sitio y la asigna a una respuesta $
  const $ = await request( // pasa la respuesta por cheerio el cual le asigna metodos para poder analizar la respuesta
    {
      url: 'http://quotes.toscrape.com/',
      transform: body => cheerio.load(body)
    }
  )
  // ahora se puede alanilazar el sitio atraves de metodos de cheerio
  // console.log($)


  // ============ DEBUG POR CONSOLA ============
  // titulo de la pagina
  const websiteTitle = $('title').html()
  console.log(websiteTitle)

  // <head> de la pagina
  const websiteDescription = $('head').html()
  console.log(websiteDescription)

  // texto del <h1> de la pagina y limpiando los espacios en blanco que no se utilizan
  const websiteTitleH1 = $('h1').text().trim()
  console.log(websiteTitleH1)

  // selecciona todo el primer elemento .quote que encuentre
  const quote = $('.quote').html()
  console.log(quote)

  // selecciona todo el primer elemento <a> que encuentre dentro .quote
  const quoteAnchor= $('.quote').find('a').html()
  console.log(quoteAnchor)

  // selecciona todo el tercer elemento .quote
  const thirdQuote= $('.quote').next().next().html()
  console.log(thirdQuote)


}

init()