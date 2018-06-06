const html = require('choo/html')
const datIcons = require('dat-icons')
const header = require('../elements/header')
const footer = require('../elements/footer')

module.exports = function (state, emit) {
  emit(state.events.DOMTITLECHANGE, '404 - Dat Not Found')

  return html`
    <body>
      ${header()}
    <div>
      <section class="bg-neutral pb4 white cover">
        <header class="tc ph5 lh-copy">
          <h1 class="f1 f-headline-l code mb3 fw9 dib tracked-tight green">
            <span class="dib">Dat</span><div class="ph4 dib-ns dn"><svg class="w3 h3"><use xlink:href="#daticon-sad-dat"/></svg></div>
            <span class="dib">404</span>
          </h1>
          <h2 class="tc f1-l fw1 mt5-l">The page you seek does not exist.</h2>
        </header>
        <p class="fw3 i tc mt4 mt5-l f4 f3-l">Are you looking for one of these?</p>
        <ul class="list tc pl0 w-100 mt5">
          <li class="dib"><a class="f5 f4-ns link color-green db pv2 ph3 hover-color-green-hover" href="/">Dat Home</a></li>
          <li class="dib"><a class="f5 f4-ns link color-blue db pv2 ph3 hover-color-blue-hover" href="/about">About</a></li>
          <li class="dib"><a class="f5 f4-ns link color-red db pv2 ph3 hover-color-red-hover" href="https://blog.datproject.org">Blog</a></li>
          <li class="dib"><a class="f5 f4-ns link color-yellow db pv2 ph3 hover-color-yellow-hover" href="https://docs.datproject.org">Documentation</a></li>
         </ul>
      </section>
    </div>
      ${footer()}
      ${datIcons()}
    </body>
  `
}
