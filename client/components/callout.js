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
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Command Line:</b> sync data to your peer network.
            </li>
            <li class="f5 mb2">
              <b>APIs:</b> build peer-to-peer applications in Node.js and the browser.
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
  ${cta(state, emit, {
    href: 'https://docs.datproject.org',
    klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2',
    text: 'Getting Started',
    id: 'docs'
  })}
          </p>
        </div>
      </div>
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4-ns mv2 mh3-l mh1-ns pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center">
            <svg><use xlink:href="#daticon-network"/></svg>
          </div>
          <h4 class="f4 mb0 tc">Why Dat?</h4>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Neutral:</b> Like core internet protocols, Dat is un-opinionated about application-level concerns. </li>
            <li class="f5 mb2">
              <b>Resilient:</b> Works offline and with limited connectivity over a distributed network.
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
  ${cta(state, emit, {
    href: 'https://datprotocol.github.io/how-dat-works/',
    klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2',
    text: 'How Dat Works',
    id: 'how-dat-works'
  })}
          </p>
        </div>
      </div>
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4-ns mv2 mh3-l mh1-ns pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center"><svg><use xlink:href="#daticon-happy-dat"/></svg></div>
          <h4 class="tc f4 mb0">Community-Driven</h4>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Protocol Specification:</b> learn about the roadmap how you can get involved.
            </li>
            <li class="f5 mb2">
              <b>Working Group:</b> a community-based governance model.
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
            ${cta(state, emit, {
    href: 'https://datprotocol.com',
    klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2',
    text: 'View the Specs',
    id: 'dat-protocol'
  })}
          </p>
        </div>
      </div>

    </div>
  `
}
