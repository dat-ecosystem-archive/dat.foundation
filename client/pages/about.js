const html = require('choo/html')
const page = require('./default')
const team = require('../elements/team')

module.exports = function (state, emit) {
  const wrapper = 'mw8-ns center-ns pv4 ph3 ph0-l'
  const copyClass = 'f4 lh-copy measure'
  const headClass = 'f3 measure-narrow'
  emit(state.events.DOMTITLECHANGE, 'About Dat Project')

  return page(html`
    <div>
      <section class="${wrapper}">
        <header class="pt4">
          <h1 class="horizontal-rule">About Dat</h1>
        </header>
        <article class="pl3">
          <p class="${copyClass}">
            Dat is a nonprofit-backed community & open protocol for building apps of the future. The Dat Project imagines a web of commons created by global communities on open and secure protocols.
          </p>
          <h2 class="${headClass}">
            Dat Protocol
          </h2>
          <p class="${copyClass}">
            TODO: Dat can be used to version data locally, or to share and sync data over the internet. Dat includes an optional peer-to-peer distribution system, meaning that the more widely that a dataset is shared, the faster it is for users to retrieve or sync a copy, and the more redundant that the dataset’s availability becomes.
          </p>
          <p class="${copyClass}">
            TODO: By building tools to build and share data pipelines, we aim to bring to data a style of collaboration similar to what Git brings to source code. Dat is designed as a general-purpose tool for any data on the Web, with our main priority being to ensure scientific data can be more easily published and archived. Dat is fully open source and is built using JavaScript, Node.js and Electron.
          </p>
          <h2 class="${headClass}">
            Code for Science & Society
          </h2>
          <p class="${copyClass}">
            TODO: Dat Project is funded through <a href="http://codeforscience.org">Code for Science & Society</a>, a U.S. 501(c)(3) non-profit.
          </p>
          <h2 class="${headClass}">
            Dat History
          </h2>
          <p class="${copyClass}">
            The first code went into Dat <a href="https://github.com/datproject/dat/commit/e5eda57b53f60b05c0c3d97da90c10cd17dcbe19">on August 17, 2013</a>. The first six months were spent making a prototype (thanks to the <a href="http://www.knightfoundation.org/grants/201346305/">John S. and James L. Knight foundation Prototype Fund</a>), followed by taking Dat beyond the prototype phase and into an alpha release.
          </p>
          <p class="${copyClass}">
            In the spring of 2014, we were able to expand the team working on Dat from one to three people, thanks to <a href="https://blog.datproject.org/2014/03/08/sloan-funding/">support from the Alfred P. Sloan foundation</a>. Sloan’s proposition was that they like the initial Dat prototype, but wanted to see scientific data use cases be treated as top priority. As a result we expanded the scope of the project from its tabular data specific beginnings, and have focused on adding features that will help us work with larger open scientific datasets. Sloan redoubled their support in the spring of 2015, allowing us to continue to fund three positions for another two years.
          </p>
          <p class="${copyClass}">
            In the winter of 2016, the Knight Foundation provided significant funding to <a href="https://blog.datproject.org/2016/02/01/announcing-publicbits-org/">create a registry for Dat-hosted datasets</a>, as well as enabling the project to grow and establish a 501(c)(3) non-profit.
          </p>
        </article>
      </section>
      <section class="bg-neutral-04">
        <div class="${wrapper}">
          ${team()}
        </div>
      </section>
    </div>
  `)
}
