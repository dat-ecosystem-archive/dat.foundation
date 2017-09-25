const html = require('choo/html')

/*
Options:

{
  bgColor: 'bg-white',
  color: 'neutral',
  title: 'Section',
  subtitle: 'Subtitle for this section',
  sections: [
    {
      title: 'First section',
      text: 'lorem bacon some things'
    },
    {
      title: 'Second section',
      text: 'lorem bacon some things'
    },
    {
      title: 'Third section',
      text: 'lorem bacon some things'
    }
  ],
  cta: {
    link: '#',
    text: 'Learn More'
  }
}
*/

module.exports = function (props) {
  props = Object.assign({
    bgColor: 'bg-white'
  }, props)

  if (!props.color && props.bgColor === 'bg-neutral') props.color = 'white'

  // Allow html
  const subtitle = html`<p class="f4 mt1 ${props.bgColor !== 'bg-neutral' ? 'color-neutral-70' : 'color-neutral-30'} horizontal-rule"></p>`
  subtitle.innerHTML = props.subtitle

  return html`
    <section class="${props.bgColor} ${props.color ? props.color : ''}">
      <div class="pv2 ph3 pa4-m mw8-ns center-ns">
        <header>
          <h2 class="f2 mb0">${props.title}</h2>
          ${subtitle}
        </header>
        <div class="pv3 cf">
          ${props.sections.map((section) => {
            return textSection(section)
          })}
        </div>
        ${cta()}
      </div>
    </section>
  `

  function cta () {
    if (!props.cta) return
    return html`
      <p class="pv3 mb4">
        ${props.cta}
      </p>
    `
  }

  function textSection (item) {
    const text = html`<p class="lh-copy ${props.bgColor === 'bg-neutral' ? 'color-neutral-30' : 'color-neutral-80'} pr3"></p>`
    text.innerHTML = item.text
    return html`
      <div class="fl w-third-ns w-100">
        <h3 class="f3 mt0">${item.title}</h3>
        ${text}
      </div>
    `
  }
}
