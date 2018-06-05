const path = require('path')
const choo = require('choo')
const html = require('choo/html')
const css = require('sheetify')

css('tachyons')
css('dat-colors')
css('./css/app.css')

const app = choo()
app.use(require('./plugins/scroll-top'))
if (process.env.ANALYTICS) app.use(require('./plugins/analytics'))

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-log')())
}

const views = {
  home: require('./pages/home'),
  about: require('./pages/about'),
  default: require('./pages/notfound')
}

// wrap views in body we can mount to view template
app.route('/', wrap('home'))
app.route('/about', wrap('about'))
app.route('/about/team', wrap('about')) // for `/about#team` - seems weird, bug?

// error route
app.route('*', wrap('default'))

if (module.parent) {
  module.exports = app
} else {
  app.mount('body')
}

function wrap (view) {
  if (module.parent) {
    return require(path.join(__dirname, 'pages', view))
  } else {
    const page = views[view]
    return function (state, emit) {
      return html`
        <body class="dat-neutral">
        ${page(state, emit)}
        </body>
      `
    }
  }
}
