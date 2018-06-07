const choo = require('choo')
const css = require('sheetify')

css('tachyons')
css('dat-colors')
css('./client/css/app.css')
css('./client/css/fonts.css')

const app = choo()
app.use(require('./client/plugins/scroll-top'))
if (process.env.ANALYTICS) app.use(require('./client/plugins/analytics'))

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.route('/', require('./client/pages/home'))
app.route('/about', require('./client/pages/about'))

// error route
app.route('*', require('./client/pages/notfound'))

module.exports = app.mount('body')
