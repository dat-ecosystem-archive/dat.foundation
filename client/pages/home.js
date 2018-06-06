const html = require('choo/html')
const css = require('sheetify')
const datIcons = require('dat-icons')
const homeSection = require('../components/home-section')
const sponsors = require('../elements/home/sponsors')
const callout = require('../components/callout')
const cta = require('../components/cta-btn')
const header = require('../elements/header')
const footer = require('../elements/footer')

module.exports = function (state, emit) {
  emit(state.events.DOMTITLECHANGE, 'Dat Project - Welcome!')

  const splash = css`
    :host {
      svg {
        width: inherit;
        height: inherit;
      }

      background-repeat: no-repeat;
      background-position: center 225px;

      @media screen and (min-width: 30em) {
        /* ns - not small breakpoint from tachyons */
        background-position: center 175px;
      }
    }
  `
  const backgroundImageUrl = '/public/img/bg-landing-page.svg'

  return html`
    <body>
      ${header()}
    <div>
      <div class="${splash} mh2 mh4-l center contain" style="background-image: url(${backgroundImageUrl})">
        <section class="tc pa3 pt5-ns">
          <h1 class="f2 f1-l mb0 lh-title">
            A distributed <span class="color-green">dat</span>a community
          </h1>
          <h2 class="f3 mt3 mb3 color-neutral-50 fw4">
            Dat is a nonprofit-backed data sharing protocol for applications of the future.
          </h2>

          ${cta(state, emit, {
    href: 'https://docs.datproject.org/install',
    klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2',
    text: 'Install Now',
    id: 'install'
  })}
          ${callout(state, emit)}
        </section>
      </div>
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
    'title': 'Why use Dat Protocol?',
    'subtitle': `
          We set out to improve access to public data and created a new protocol along the way.
          Learn more at <a
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            href="https://www.datprotocol.com/"
            >datprotocol.com</a>.
        `,
    'sections': [
      {
        'title': 'Distributed Sync',
        'text': 'Modeled after the best parts of Git, BitTorrent, and the internet, the Dat Protocol is a peer-to-peer protocol for syncing files and data across distributed networks.'
      },
      {
        'title': 'Faster Speeds',
        'text': `
              Improving speeds while using less bandwidth sounds impossible.
              The Dat Protocol makes it the default by using a peer-to-peer network.
              Seamlessly add or remove hosts as needed.
            `
      },
      {
        'title': 'Efficient Storage',
        'text': 'Data is deduplicated between versions, reducing bandwidth costs and improving speed. Developers can create custom storage that work over a variety of protocols.'
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
    'title': 'Imagining a better future',
    'subtitle': `
          Along the way of building the future we got lost.
          We need public technology driven by communities and humans.
        `,
    'sections': [
      {
        'title': 'Human Technology',
        'text': `
              We believe that not-for-profit and human-driven technology will be the future of the open web.
              We must also nurture an inclusive community creating fair technology.
            `
      },
      {
        'title': 'User-First Applications',
        'text': `
              User security and privacy take priority in the Dat Protocol.
              Applications using Dat get encrypted transfer, private data sharing, and content verification built-in.
            `
      },
      {
        'title': 'Public Infrastructure',
        'text': `
              Existing Internet infrastructure was funded and built for the public.
              Large monopolies now control the web.
              Can we imagine a new model for technology infrastructure?
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
