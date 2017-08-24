const html = require('bel')

module.exports = function (props) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${props.title || 'Dat Project'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/public/bundle.css">
        <link rel="preload" as="font" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700">
        <link rel="icon" href="/public/img/favicon.ico">
        ${metaTags()}
        <meta property="og:site_name" content="Dat Project" />
        <meta property="og:type" content="article" />
      </head>
      <body class="dat-neutral">
        <main>
          ${format(props.content)}
        </main>
        <script src="/public/bundle.js"></script>
      </body>
    </html>
  `

  function metaTags () {
    const md = {
      title: props.title || 'Dat',
      author: 'Dat Project',
      description: props.description || 'Dat is the non-profit, secure, and distributed package manager for data.',
      image: 'https://datproject.org/public/img/dat-hexagon.png',
      twitterImage: 'https://datproject.org/public/img/dat-data-logo.png',
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

  function analytics () {
    // TODO: use https://github.com/vesparny/fair-analytics?
    return html`
      <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-49664853-1', 'datproject.org');
        ga('send', 'pageview');
      </script>
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
