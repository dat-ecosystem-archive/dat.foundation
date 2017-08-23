const html = require('choo/html')
const css = require('sheetify')
const page = require('./default')
const sponsors = require('../elements/sponsors')

module.exports = function (state, emit) {
  const splash = css`
    :host {
      svg {
        width: inherit;
        height: inherit;
      }

      background-repeat: no-repeat;
      background-position: center 150px;
    }
  `
  const backgroundImageUrl = 'public/img/bg-landing-page.svg'

  return page(html`
    <div>
      <div class="${splash} mh3 mh4-l center contain" style="background-image: url(${backgroundImageUrl})">
        <section class="tc pt5 pb3">
          <h1 class="f2 f1-l mb0 lh-title">A distributed data community</h1>
          <h2 class="f3 mt3 mb4 color-neutral-50 fw2">Dat is the nonprofit-backed technology community for building apps of the future.</h2>
          <div class="mt7 mw8 center tl flex flex-row-ns flex-column w-100">
            <div class="flex w-100 w-third-ns bg-white dat-shadow mv4 mh3-l mh1 pa3">
              <div class="flex-column flex">
                <div class="mt3 w3 h3 center">
                  <svg><use xlink:href="#daticon-star-dat"/ ></svg>
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
                  <a class="bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2 mb3" href="#">Use Dat for Data</a>
                </p>
              </div>
            </div>
            <div class="flex w-100 w-third-ns bg-white dat-shadow mv4 mh3-l mh1 pa3">
              <div class="flex-column flex">
                <div class="mt3 w3 h3 center"><svg><use xlink:href="#daticon-network"/ ></svg></div>
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
                  <a class="bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2 mb3" href="#">Visit Beaker Browser</a>
                </p>
              </div>
            </div>
            <div class="flex w-100 w-third-ns bg-white dat-shadow mv4 mh3-l mh1 pa3">
              <div class="flex-column flex">
                <div class="mt3 w3 h3 center"><svg><use xlink:href="#daticon-happy-dat"/ ></svg></div>
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
                  <a class="bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2 mb3" href="#">Start Building</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="bg-neutral-04">
        <div class="pa2 pa4-l mw8-ns center-ns">
          <header>
            <h2 class="f2 mb0">Community</h2>
            <p class="f4 mt1 color-neutral-70 horizontal-rule">
              We envision a different kind of internet infastructure; one built for everyone.
              We want you to help us build it.
            </p>
          </header>
          <div class="pt3 cf">
            <div class="fl w-third-ns w-100">
              <h3 class="f3">Mission Driven</h3>
              <p class="lh-copy color-neutral-80 pr3">
                Lead by Code for Science & Society, we are committed to improving public infastructure.
                We believe public data should be instantly accessible and users of web apps should have control of their data.
              </p>
            </div>
            <div class="fl w-third-ns w-100">
              <h3 class="f3">Fair</h3>
              <p class="lh-copy color-neutral-80 pr3">
                All communities should have equal access to online resources, without sacrificing security or privacy.
                Anyone should be able to publish content without being tracked.
              </p>
            </div>
            <div class="fl w-third-ns w-100">
              <h3 class="f3">Built for the Future</h3>
              <p class="lh-copy color-neutral-80 pr3">
                Next-generation technologies must be developed for the public, not for private investors.
                Sustainability and resource consumption must be at the forefront.
              </p>
            </div>
          </div>
          <p class="pt4">
            <a href="#" class="f5 white bg-animate bg-green hover-bg-dark-green pa3 link">Learn More About the Community</a>
          </p>
        </div>
      </section>
      <section class="bg-neutral white">
        <div class="pa2 pa4-l mw8-ns center-ns">
          <header>
            <h2 class="f2 mb0">Why Dat?</h2>
            <p class="f4 mt1 color-neutral-30 horizontal-rule">
              Dat helps create "apps of the future", but what does that mean?
            </p>
          </header>
          <div class="pt3 cf">
            <div class="fl w-third-ns w-100">
              <h3 class="f3">Dat Protocol</h3>
              <p class="lh-copy color-neutral-04">
                TODO
              </p>
            </div>
            <div class="fl w-third-ns w-100">
              <h3 class="f3">Fast & Secure</h3>
              <p class="lh-copy color-neutral-04">
                TODO
              </p>
            </div>
            <div class="fl w-third-ns w-100">
              <h3 class="f3">Integrate Anywhere</h3>
              <p class="lh-copy color-neutral-04">
                TODO
              </p>
            </div>
          </div>
          <p class="pt4">
            <a href="http://docs.datproject.org" class="f5 white bg-animate bg-green hover-bg-dark-green pa3 link">Read the Documentation</a>
          </p>
        </div>
      </section>
      ${sponsors('pa2 pa4-l mw8-ns center-ns')}
    </div>

  `)
}
