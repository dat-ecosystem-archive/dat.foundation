const html = require('choo/html')
const cta = require('./cta-btn')

module.exports = function (state, emit) {
  return html`
    <div class="mt3 mw8 center tl flex flex-row-ns flex-column w-100">
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4-ns mv2 mh3-l mh1-ns pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center">
            <svg><use xlink:href="#daticon-star-dat"/></svg>
          </div>
          <h4 class="f4 mb0 tc">Documentation</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            Learn About Dat
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Command Line:</b> install and learn how to use the Dat command line.
            </li>
            <li class="f5 mb2">
              <b>Javascript APIs:</b> build peer-to-peer applications in Node.js.
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
  ${cta(state, emit, {
    href: 'https://docs.datproject.org.org',
    klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2',
    text: 'Getting Started',
    id: 'docs'
  })}
          </p>
        </div>
      </div>
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4-ns mv2 mh3-l mh1-ns pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center"><svg><use xlink:href="#daticon-network"/></svg></div>
          <h4 class="f4 mb0 tc">Dat Ecosystem</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            Community Applications & Tools
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Community-Driven:</b> learn more about applications built on Dat.
            </li>
            <li class="f5 mb2">
              <b>Open Source:</b> discover open source Dat modules and more.
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
            ${cta(state, emit,
    {
      href: 'https://dat.land',
      klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2',
      text: 'Explore Dat Land',
      id: 'dat-land'
    })}
          </p>
        </div>
      </div>
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4-ns mv2 mh3-l mh1-ns pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center"><svg><use xlink:href="#daticon-happy-dat"/></svg></div>
          <h4 class="tc f4 mb0">Dat Protocol</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            How Dat Works
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Protocol Specification:</b> learn about the Dat protocol and how it works.
            </li>
            <li class="f5 mb2">
              <b>Working Group:</b> see how our community creates the Dat protocol.
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
            ${cta(state, emit, {
    href: 'https://datprotocol.com',
    klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2',
    text: 'Dat Internals',
    id: 'dat-protocol'
  })}
          </p>
        </div>
      </div>
    </div>
  `
}
