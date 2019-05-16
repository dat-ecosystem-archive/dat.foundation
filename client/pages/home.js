const html = require('choo/html')
const css = require('sheetify')
const datIcons = require('dat-icons')
const homeSection = require('../components/home-section')
const sponsors = require('../elements/home/sponsors')
const projects = require('../elements/home/projects')
const callout = require('../components/callout')
const cta = require('../components/cta-btn')
const header = require('../elements/header')
const footer = require('../elements/footer')

const splash = css`
  :host {
    background-repeat: no-repeat;
    background-position: center 225px;
    background-image: url("/public/img/bg-landing-page.svg");
  }

  :host > svg {
    width: inherit;
    height: inherit;
  }

  @media screen and (min-width: 30em) {
    /* ns - not small breakpoint from tachyons */
    background-position: center 175px;
  }
`

module.exports = function (state, emit) {
  emit(state.events.DOMTITLECHANGE, 'dat:// — a peer-to-peer protocol')

  return html`
    <body>
      ${header()}
    <div>
      <div class="${splash} mh2 mh4-l center contain">
        <section class="tc pa3 pt5-ns">
          <h1 class="f2 f1-l mb0 lh-title">
            <span class="color-green">dat://</span> — a peer-to-peer web protocol
          </h1>
          <h2 class="f3 mt3 mb3 color-neutral-50 fw4">
           Community-driven project for distributed data syncronization
          </h2>
          <div class="w-100 mt5">
            <img class="center h4" src="/public/img/dat-logo.png" alt="Dat Foundation">
          </div>
          ${callout(state, emit)}
        </section>
      </div>
      ${projects({
    klass: 'bg-white'
  })}
      ${homeSection({
    'title': 'Value-Driven Technology',
    'subtitle': `
          Technology driven by communities & built for public well-being.
        `,
    'sections': [
      {
        'title': 'Community First',
        'text': `The Dat Protocol Foundation is a small non-profit group that provides social and technical infrastructure for the consortium of contributors to the Dat Protocol.`
      },
      {
        'title': 'Transparent Funding',
        'text': `We believe information and communication technology should be <a href="https://github.com/datproject/organization" target="_blank" class="link">transparently funded and operated</a>. Development of the core protocol is driven entirely by contributors from the consortium and grants from external organizations, keeping it neutral and flexible.`
      },
      {
        'title': 'Open Governance',
        'text': `
            At the scale of the web, every decision can have a massive impact on our political systems, social well-being, and the future of humanity. Dat Protocol Foundation runs openly through a series of <a
            target="_blank"
            class="link"
            href="/about#team"
            >working groups</a>.
            `
      }
    ],
    cta: cta(state, emit, {
      id: 'blog-cta',
      href: 'https://blog.datproject.org',
      text: 'Learn More on Dat Blog',
      klass: 'f5 white bg-animate bg-green hover-bg-dark-green pa3 link'
    })
  })}
      ${sponsors({
    klass: 'bg-neutral-04',
    cta: cta(state, emit, {
      id: 'donate-cta',
      href: 'https://donate.datproject.org',
      text: 'Donate Today',
      klass: 'no-underline f4 tc db w-100 pv3 bg-animate bg-green hover-bg-dark-green white'
    })
  })}
    </div>
      ${footer()}
      ${datIcons()}
    </body>
  `
}
