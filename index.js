// bibliotecas necesarias para poder alanilzar el sitio web
const cheerio = require('cheerio'),
      request = require('request-promise'),
      fs = require('fs-extra')

// ============ CREACION DE UN ARCHIVO CON LA INFORMACION RECOLECTADA ============
const writeStream = fs.createWriteStream('quotes.csv') // crea el archivo y le da un titulo


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
  // console.log(websiteTitle)

  // <head> de la pagina
  const websiteDescription = $('head').html()
  // console.log(websiteDescription)

  // texto del <h1> de la pagina y limpiando los espacios en blanco que no se utilizan
  const websiteTitleH1 = $('h1').text().trim()
  // console.log(websiteTitleH1)

  // selecciona todo el primer elemento .quote que encuentre
  const quote = $('.quote').html()
  // console.log(quote)

  // selecciona todo el primer elemento <a> que encuentre dentro .quote
  const quoteAnchor= $('.quote').find('a').html()
  // console.log(quoteAnchor)
  
  // selecciona todo el tercer elemento .quote
  const thirdQuote= $('.quote').next().next().html()
  // console.log(thirdQuote)

  // selecciona el col-md-8 con todas las quote qwe tiene dentro
  const parentContainerClass = $('.row .col-md-8').parent().next().html()
  // console.log(containerClass)
  
  // selecciona el primer elemento hijo de  col-md-8
  const childrenContainerClass = $('.row .col-md-8').children().html()
  // console.log(childrenContainerClass)

  // selecciona todos los div con la clase quote en su texto y los recorre con la funcion .each
  const quoteSpantext = $('.quote span.text').each( (index, element) => {
    // console.log(index, $(element).html())
    // console.log(index, $(element).text())

    const elementText = $(element).text()
    const onlyElemetText = elementText.replace(/(^\“|\”$)/g, '') // remplaza las comillas por nada
    // console.log(index, onlyElemetText)
  })
  
  // ============ CREACION DE UN ARCHIVO CON LA INFORMACION RECOLECTADA ============
  writeStream.write('Quote|Author|Tags\n')
  
  // recorre los elementos con la clase .quote
  $('.quote').each( (index, element) => {
    const text = $(element).find('span.text').text().replace(/(^\“|\”$)/g, '')
    const autor = $(element).find('span small.author').text()
    const tags = []
    $(element).find('.tags a.tag').each( (i, el) => tags.push($(el).text()))
    // console.log(tags)
    
    // ============ CREACION DE UN ARCHIVO CON LA INFORMACION RECOLECTADA ============
    writeStream.write(`${text}|${autor}|${tags}\n`) // \n permite hacer un salto de linea cuando vuelva a recorrer y de esa manera crear otra fila
  })

}
init()