const html = require('choo/html')

module.exports = function (state, emit, props) {
  props = Object.assign({
    klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2 mb3'
  }, props)
  var el = html`
    <a id="${props.id}" onclick=${(e) => { emit(state.events.TRACK_CTA, e) }} class="${props.klass}" href="${props.href}">${props.text}</a>
  `
  emit(state.events.TRACK_CTAEL, el)

  return el
}
