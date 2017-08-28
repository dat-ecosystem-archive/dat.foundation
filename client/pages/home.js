const html = require('choo/html')
const css = require('sheetify')
const page = require('./default')
const homeSection = require('../components/home-section')
const sponsors = require('../elements/home/sponsors')
const callout = require('../elements/home/callout')

module.exports = function (state, emit) {
  const splash = css`
    :host {
      svg {
        width: inherit;
        height: inherit;
      }

      background-repeat: no-repeat;
      background-position: center 275px;

      @media screen and (min-width: 30em) {
        /* ns - not small breakpoint from tachyons */
        background-position: center 175px;
      }
    }
  `
  const backgroundImageUrl = '/img/bg-landing-page.svg'

  return page(html`
    <div>
      <div class="${splash} mh2 mh4-l center contain" style="background-image: url(${backgroundImageUrl})">
        <section class="tc pa3 pt5-ns">
          <h1 class="f2 f1-l mb0 lh-title">A distributed <span class="color-green">dat</span>a community</h1>
          <h2 class="f3 mt3 mb4 color-neutral-50 fw2">Dat is the nonprofit-backed technology & community for building apps of the future.</h2>
          ${callout()}
        </section>
      </div>
      ${homeSection({
        'bgColor': 'bg-neutral-04',
        'title': 'Lorem Ipsum',
        'subtitle': 'Some catchy subtitle',
        'sections': [
          {
            'title': 'First Section',
            'text': 'asdfasdfa'
          },
          {
            'title': 'Second Section',
            'text': 'asdf'
          },
          {
            'title': 'Last Section',
            'text': 'asdfasdf'
          }
        ]
      })}
      ${homeSection({
        'bgColor': 'bg-neutral',
        'title': 'Built With Care',
        'subtitle': 'Dat is built within a vibrant open source module-based ecosystem. <a href="/paper">Read the paper</a>.',
        'sections': [
          {
            'title': 'Distributed Sync',
            'text': 'Dat syncs and streams data directly between devices, putting you in control of where your data goes.'
          },
          {
            'title': 'Efficient Storage',
            'text': 'Data is deduplicated between versions, reducing bandwidth costs and improving speed.'
          },
          {
            'title': 'Secure Preservation',
            'text': 'Dat uses Secure Registers with state of the art cryptography to ensure data can be trusted, archived, and preserved by anyone.'
          }
        ],
        'cta': {
          'link': 'http://docs.datproject.org',
          'text': 'Read the documentation'
        }
      })}
      ${sponsors('pa2 pa4-m mw8-ns center-ns')}
    </div>
  `)
}
