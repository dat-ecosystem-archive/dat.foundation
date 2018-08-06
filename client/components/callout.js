const html = require('choo/html')
const cta = require('./cta-btn')

module.exports = function (state, emit) {
  return html`
    <div class="mt5-ns mt5 mw8 center tl flex flex-row-ns flex-column w-100">
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4-ns mv2 mh3-l mh1-ns pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center">
            <svg><use xlink:href="#daticon-star-dat"/></svg>
          </div>
          <h4 class="f4 mb0 tc">Dat Base</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            Dat for Researchers
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Open Data:</b> archive, catalogue, and share data pipelines.
            </li>
            <li class="f5 mb2">
              <b>Public Archives:</b> archiving public data at risk of being lost.
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
  ${cta(state, emit, {
    href: 'https://datbase.org',
    klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2',
    text: 'Share Data',
    id: 'datbase'
  })}
          </p>
        </div>
      </div>
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4-ns mv2 mh3-l mh1-ns pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center"><svg><use xlink:href="#daticon-happy-dat"/></svg></div>
          <h4 class="tc f4 mb0">Dat Protocol</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            Build Custom Dat Apps
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Live Syncing:</b> easy file transfers, distributed databases, p2p streams.
            </li>
            <li class="f5 mb2">
              <b>Futuristic:</b> interoperable and peer-to-peer by default.
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
            ${cta(state, emit, {
    href: 'https://datprotocol.com',
    klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2',
    text: 'Build on Dat',
    id: 'dat-land'
  })}
          </p>
        </div>
      </div>
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4-ns mv2 mh3-l mh1-ns pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center"><svg><use xlink:href="#daticon-network"/></svg></div>
          <h4 class="f4 mb0 tc">Decentralized Web</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            Peer-to-peer websites
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Beaker Browser:</b> browse, create, and host websites over Dat.
            </li>
            <li class="f5 mb2">
              <b>Direct Sharing:</b> share files with a unique URL.
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
            ${cta(state, emit,
    {
      href: 'https://beakerbrowser.com',
      klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2',
      text: 'Visit Beaker Browser',
      id: 'beaker'
    })}
          </p>
        </div>
      </div>
    </div>
  `
}
