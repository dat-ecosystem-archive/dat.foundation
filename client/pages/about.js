const html = require('choo/html')
const page = require('./default')
const team = require('../elements/team')

module.exports = function (state, emit) {
  const wrapper = 'center-ns pv4 ph3 ph0-l'

  return page(html`
    <div>
      <header class="mw8-ns center-ns pt4 ph3 ph0-l">
        <h1 class="horizontal-rule">About Dat</h1>
      </header>
      <section class="mw7-ns ${wrapper}">
        <h2 class="">
          Dat is a protocol for efficiently syncing & versioning data across a distributed network.
        </h2>
        <p class="lh-copy">
          TODO: Dat can be used to version data locally, or to share and sync data over the internet. Dat includes an optional peer-to-peer distribution system, meaning that the more widely that a dataset is shared, the faster it is for users to retrieve or sync a copy, and the more redundant that the dataset’s availability becomes.
        </p>
        <p class="lh-copy">
          TODO: By building tools to build and share data pipelines, we aim to bring to data a style of collaboration similar to what Git brings to source code. Dat is designed as a general-purpose tool for any data on the Web, with our main priority being to ensure scientific data can be more easily published and archived. Dat is fully open source and is built using JavaScript, Node.js and Electron.
        </p>
        <h2>Code for Science & Society</h2>
        <p class="lh-copy">
          TODO: Dat Project is funded through <a href="http://codeforscience.org">Code for Science & Society</a>, a U.S. 501(c)(3) non-profit.
        </p>
        <h2>Dat History</h2>
        <p class="lh-copy">The first code went into Dat <a href="https://github.com/datproject/dat/commit/e5eda57b53f60b05c0c3d97da90c10cd17dcbe19">on August 17, 2013</a>. The first six months were spent making a prototype (thanks to the <a href="http://www.knightfoundation.org/grants/201346305/">John S. and James L. Knight foundation Prototype Fund</a>), followed by taking Dat beyond the prototype phase and into an alpha release.</p>
        <p class="lh-copy">In the spring of 2014, we were able to expand the team working on Dat from one to three people, thanks to <a href="https://blog.datproject.org/2014/03/08/sloan-funding/">support from the Alfred P. Sloan foundation</a>. Sloan’s proposition was that they like the initial Dat prototype, but wanted to see scientific data use cases be treated as top priority. As a result we expanded the scope of the project from its tabular data specific beginnings, and have focused on adding features that will help us work with larger open scientific datasets. Sloan redoubled their support in the spring of 2015, allowing us to continue to fund three positions for another two years.</p>
        <p class="lh-copy">In the winter of 2016, the Knight Foundation provided significant funding to <a href="https://blog.datproject.org/2016/02/01/announcing-publicbits-org/">create a registry for Dat-hosted datasets</a>, as well as enabling the project to grow and establish a 501(c)(3) non-profit.</p>
      </section>
      <section class="bg-neutral-04">
        <div class="mw8-ns ${wrapper}">
          ${team()}
        </div>
      </section>
    </div>
  `)
}
