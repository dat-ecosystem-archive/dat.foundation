const html = require('choo/html')
const css = require('sheetify')
const page = require('./default')

module.exports = function (state, emit) {
  emit(state.events.DOMTITLECHANGE, '404 - Dat Not Found')

  const splash = css`
    :host {
      background-repeat: repeat-y;
      background-position: center 0px;

      @media screen and (min-width: 30em) {
        /* ns - not small breakpoint from tachyons */
        background-position: center -125px;
      }
    }
  `
  const backgroundImageUrl = '/img/bg-landing-page.svg'
  return page(html`
    <div>
      <section class="${splash} bg-neutral pb4 white cover" style="background-image: url(${backgroundImageUrl})">
        <header class="tc ph5 lh-copy">
          <h1 class="f1 f-headline-l code mb3 fw9 dib tracked-tight green">
            dat
            <div class="dib-ns w3 h3 dn center"><svg><use xlink:href="#daticon-sad-dat"/ ></svg></div>
            404
          </h1>
          <h2 class="tc f1-l fw1 mt5-l">The page you seek does not exist right now.</h2>
        </header>
        <p class="fw1 i tc mt4 mt5-l f4 f3-l">Are you looking for one of these?</p>
        <ul class="list tc pl0 w-100 mt5">
          <li class="dib"><a class="f5 f4-ns link color-green db pv2 ph3 hover-color-green-hover" href="/">Dat Home</a></li>
          <li class="dib"><a class="f5 f4-ns link color-blue db pv2 ph3 hover-color-blue-hover" href="/about">About</a></li>
          <li class="dib"><a class="f5 f4-ns link color-red db pv2 ph3 hover-color-red-hover" href="http://blog.datproject.org">Blog</a></li>
          <li class="dib"><a class="f5 f4-ns link color-yellow db pv2 ph3 hover-color-yellow-hover" href="http://docs.datproject.org">Documentation</a></li>
         </ul>
      </section>
    </div>
  `)
}
