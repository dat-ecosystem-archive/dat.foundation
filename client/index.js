const choo = require('choo')
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

app.route('/', require('./pages/home'))
app.route('/about', require('./pages/about'))

// error route
app.route('*', require('./pages/notfound'))

module.exports = app.mount('body')
