const html = require('choo/html')
const datIcons = require('dat-icons')
const header = require('../elements/header')
const footer = require('../elements/footer')

module.exports = function (content) {
  return html`
    <div>
      ${header()}
      ${content}
      ${footer()}
      ${datIcons()}
    </div>
  `
}
