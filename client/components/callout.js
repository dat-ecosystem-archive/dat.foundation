const html = require('choo/html')
const cta = require('./cta-btn')

module.exports = function (state, emit) {
  return html`
    <div class="mt7 mw8 center tl flex flex-row-ns flex-column w-100">
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4 mh3-l mh1 pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center">
            <svg><use xlink:href="#daticon-star-dat"/></svg>
          </div>
          <h4 class="f4 mb0 tc">Data Tools</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            Research & Scientific Data
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Publish Instantly:</b> share data straight from your computer, no more file upload forms.
            </li>
            <li class="f5 mb2">
              <b>Use with Git</b>: Dat can manage data alongside a git repository.
            </li>
            <li class="f5 mb2">
              <b>User Friendly:</b> a simple to use desktop app or command line tool.
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
            ${cta(state, emit, {
              href: 'http://datbase.org',
              klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2 mb3',
              text: 'Use Dat for Data',
              id: 'datbase'
            })}
          </p>
        </div>
      </div>
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4 mh3-l mh1 pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center"><svg><use xlink:href="#daticon-network"/></svg></div>
          <h4 class="f4 mb0 tc">Decentralized Web</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            Peer-to-peer websites
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Beaker Browser:</b> a first-class distributed web browser built on Dat.
            </li>
            <li class="f5 mb2">
              <b>Instant Websites:</b> share websites without a host in Dat's network.
            </li>
            <li class="f5 mb2">
              <b>Always compatible:</b> browse any dat via Beaker, regardless of what app created it!
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
            ${cta(state, emit, {
              href: 'http://beakerbrowser.com',
              klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2 mb3',
              text: 'Visit Beaker Browser',
              id: 'beaker'
            })}
          </p>
        </div>
      </div>
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4 mh3-l mh1 pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center"><svg><use xlink:href="#daticon-happy-dat"/></svg></div>
          <h4 class="tc f4 mb0">Dat Community</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            Build Custom Dat Apps
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Dat protocol:</b> painless file transfers and distributed streams.
            </li>
            <li class="f5 mb2">
              <b>Live sync:</b> build apps with auto-updating & distributed data sharing.
            </li>
            <li class="f5 mb2">
              <b>Secure by default:</b> data is encrypted in transfer and content verified on arrival.
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
            ${cta(state, emit, {
              href: 'http://dat.land',
              klass: 'bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2 mb3',
              text: 'Travel to Dat Land',
              id: 'dat-land'
            })}
          </p>
        </div>
      </div>
    </div>
  `
}
