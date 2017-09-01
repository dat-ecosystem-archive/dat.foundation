const html = require('choo/html')

module.exports = function () {
  return html`
    <div class="mt7 mw8 center tl flex flex-row-ns flex-column w-100">
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4 mh3-l mh1 pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center">
            <svg><use xlink:href="#daticon-star-dat"/ ></svg>
          </div>
          <h4 class="f4 mb0 tc small-caps">DatBase</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            Distributed Data Preprints
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Publish when ready:</b> share data privatly until you're ready to publish.
            </li>
            <li class="f5 mb2">
              <b>User friendly:</b> simple to use command line tool. Works alognside apps like Dropbox or Google Drive.
            </li>
            <li class="f5 mb2">
              <b>Reproducible:</b> Persistent identifcation and a full history of changes.
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
            <a class="bg-green white b f5 no-underline b--green ba grow dib v-mid ba ph3 pv2 mb3" href="http://datbase.org">Visit DatBase.org</a>
          </p>
        </div>
      </div>
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4 mh3-l mh1 pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center"><svg><use xlink:href="#daticon-network"/ ></svg></div>
          <h4 class="f4 mb0 tc small-caps">Distributed Web</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            Peer-to-peer websites
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Beaker Browser:</b> a web browser with first-class support for Dat.
            </li>
            <li class="f5 mb2">
              <b>Create the web:</b> build & share websites instantly, no host required.
            </li>
            <li class="f5 mb2">
              <b>Secret sharing:</b> use Dat's automatic encryption to publish private URLs.
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
            <a class="bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2 mb3" href="http://beakerbrowser.com">Install Beaker Browser</a>
          </p>
        </div>
      </div>
      <div class="flex w-100 w-third-ns bg-white dat-shadow mv4 mh3-l mh1 pa3">
        <div class="flex-column flex">
          <div class="mt3 w3 h3 center"><svg><use xlink:href="#daticon-happy-dat"/ ></svg></div>
          <h4 class="tc f4 mb0 small-caps">Dat.Land</h4>
          <p class="tc mb0 f7 ttu dat-neutral-70">
            Dat's Hacker Community
          </p>
          <ul class="dat-list list p0 lh-copy">
            <li class="f5 mb2">
              <b>Open & global:</b> vibrant open source community developing & using Dat.
            </li>
            <li class="f5 mb2">
              <b>Built on Dat:</b> create data-rich applications with Dat's painless file sync & distributed streams.
            </li>
            <li class="f5 mb2">
              <b>Contribute:</b> help us build Dat's core tools and applications!
            </li>
          </ul>
          <p class="tr mb0" style="margin-top:auto;">
            <a class="bg-green white b f5 no-underline grow dib v-mid ba ph3 pv2 mb3" href="http://dat.land">Travel to Dat Land</a>
          </p>
        </div>
      </div>
    </div>
  `
}
