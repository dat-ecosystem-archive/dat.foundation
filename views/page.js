const html = require('bel')

module.exports = function (props) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${props.title || 'Dat Project'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/fonts/fonts.css">
        <link rel="stylesheet" href="/bundle.css">
        <link rel="icon" href="/img/favicon.ico">
        ${metaTags()}
        <meta property="og:site_name" content="Dat Project" />
        <meta property="og:type" content="article" />
      </head>
      <body class="dat-neutral">
        <main>
          ${format(props.content)}
        </main>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `

  function metaTags () {
    const md = {
      title: props.title || 'Dat Project',
      author: 'Dat Project',
      description: props.description || 'Dat is the non-profit, secure, and distributed package manager for data.',
      image: 'https://datproject.org/img/dat-hexagon.png',
      twitterImage: 'https://datproject.org/img/dat-data-logo.png',
      twitterSite: '@dat_project'
    }
    return html`
      <meta name="title" content="${md.title}" />
      <meta property="og:title" content="${md.title}" />
      <meta name="author" content="${md.author}" />
      <meta name="description" content="${md.description}" />
      <meta property="og:description" content="${md.description}" />
      <meta property="og:url" content="${props.url}" />
      <meta property="og:image" content="${md.image}" />
      <meta property="twitter:site" content="${md.twitterSite}" />
      <meta property="twitter:image" content="${md.twitterImage}" />
    `
  }

  function format (str) {
    // https://github.com/shama/bel/issues/84
    var wrapper
    if (typeof window !== 'undefined') {
      wrapper = html`<div></div>`
      wrapper.innerHTML = str
      return wrapper
    } else {
      wrapper = new String(str)
      wrapper.__encoded = true
      return wrapper
    }
  }
}
