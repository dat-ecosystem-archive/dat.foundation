const html = require('choo/html')
const css = require('sheetify')
const datIcons = require('dat-icons')
const homeSection = require('../components/home-section')
const sponsors = require('../elements/home/sponsors')
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
            <span class="color-green">dat://</span> — a peer-to-peer protocol
          </h1>
          <h2 class="f3 mt3 mb3 color-neutral-50 fw4">
           A community-driven project powering a next-generation Web
          </h2>
          <div class="w-100 mt5">
            <img class="center h4" src="/public/img/dat-logo.png" alt="Dat Project">
          </div>
          ${callout(state, emit)}
        </section>
      </div>
      ${homeSection({
    'bgColor': 'bg-neutral',
    'title': 'A bit more about Dat...',
    'subtitle': `
       Core pieces of the web shape how we communicate and organize. However, these pieces are increasingly controlled by large monopolies. In building Dat, we envision a future of community-driven tools backed by nonprofit organizations.
        `,
    'sections': [
      {
        'title': 'What is a web protocol?',
        'text': 'Whether you know it or not, you probably use at least one web protocol everyday — HTTP! Similar to HTTP, the Dat Protocol uses the Internet to transfer data between computers (plus a lot more, read on!). Dat leverages existing infrastructure while making the web more user-centered.'
      },
      {
        'title': 'Who runs the Dat Project?',
        'text': `
            Dat is an open source project with community governance through a set of working groups. Dat is funded by donations and grants, with sponsorship by Code for Science & Society, a US nonprofit. Dat aims to support maintainance and core feature development through public funding.
            `
      },
      {
        'title': 'Why create a new protocol?',
        'text': 'The next-generation web includes public & private places for communities, without selling data to advertisers. Designed initially for research data, Dat builds on the existing web while providing more user control. Dat allows users to share directly and establish new models for digital collaboration.'
      }
    ],
    cta: cta(state, emit, {
      id: 'docs-cta',
      href: '/about',
      text: 'Read More About Dat',
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
      ${homeSection({
    'bgColor': 'bg-neutral',
    'title': 'Who uses Dat?',
    'subtitle': `
          Initially designed for sharing and archiving research data, Dat is now used by a wide variety of communities.
        `,
    'sections': [
      {
        'title': 'Researchers',
        'text': '(Why do researchers use Dat? transparency, archivability, data duplication)'
      },
      {
        'title': 'Creators',
        'text': `
              (Why do "creators" use Dat? easy publishing, customizability)
            `
      },
      {
        'title': 'Activists',
        'text': '(Why do activists use Dat? offline, local control of data)'
      }
    ],
    cta: cta(state, emit, {
      id: 'docs-cta',
      href: 'https://docs.datproject.org',
      text: 'Read the documentation',
      klass: 'f5 white bg-animate bg-green hover-bg-dark-green pa3 link'
    })
  })}
      ${homeSection({
    'title': 'Striving for Value-Driven Technology',
    'subtitle': `
          Along the way of building the web we got lost.
          We need technology driven by communities & built for public well-being.
        `,
    'sections': [
      {
        'title': 'Community First',
        'text': `
              We believe not-for-profit and community-driven technology will make the future of the web more inclusive.
              To build that future, we must develop with communities not served by the current monopoly-driven system.
            `
      },
      {
        'title': 'Transparent Funding',
        'text': `
              We believe digital tools we rely on for community organization &  communication should be transparently funded and operated. Dat Project aims to be <a href="https://github.com/datproject/organization" target="_blank" class="link">transparent</a> about funding and the process of fundraising.
            `
      },
      {
        'title': 'Open Governance',
        'text': `
            At the scale of the web, every decision can have a massive impact on our political systems, social well-being, and the future of humanity. We believe these decisions should not be made by private groups aiming to increase profits. Dat Project runs openly through a series of <a
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
    </div>
      ${footer()}
      ${datIcons()}
    </body>
  `
}
