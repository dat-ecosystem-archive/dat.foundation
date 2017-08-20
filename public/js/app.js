const choo = require('choo')
const app = choo()
const css = require('sheetify')
css('dat-colors')
css('tachyons')

// define routes:
app.route('/', require('./splash'))
app.route('/about', require('./about'))
app.route('/team', require('./team'))

app.defaults = defaults

if (module.parent) {
  module.exports = app
} else {
  app.mount('#app-root')
}
