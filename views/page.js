const html = require('bel')
const minify = require('html-minifier').minify

module.exports = function (props) {
  const output = html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${props.title || 'Dat Project - A Distributed Data Community'}</title>
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

  return minify(output.toString(), {
    // options from bankai: https://github.com/choojs/bankai/blob/2b76ce675617e18a9d2c93b961232f2b7395587c/lib/html-minify-stream.js#L8
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    decodeEntities: true,
    quoteCharacter: '"',
    removeComments: true,
    removeEmptyAttributes: true,
    removeEmptyElements: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
    useShortDoctype: true
  })

  function metaTags () {
    const md = {
      title: props.title || 'Dat Project - A Distributed Data Community',
      author: 'Dat Project',
      description: props.description || 'Dat is the nonprofit-backed technology & community for building apps of the future.',
      image: 'https://datproject.org/img/dat-hexagon.png',
      twitterImage: 'https://datproject.org/img/dat-data-logo.png',
      twitterSite: '@dat_project'
    }
    return html`
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
