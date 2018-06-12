const html = require('choo/html')
const datIcons = require('dat-icons')
const team = require('../elements/team')
const header = require('../elements/header')
const footer = require('../elements/footer')

module.exports = function (state, emit) {
  const wrapper = 'mw8-ns center-ns pv4 ph3 ph0-l'
  const copyClass = 'f4 lh-copy measure'
  const headClass = 'f4 measure-narrow'
  emit(state.events.DOMTITLECHANGE, 'About Dat Project')

  return html`
    <body>
      ${header()}
    <div>
      <section class="${wrapper}">
        <header class="">
          <h1 class="f2 horizontal-rule">About Dat</h1>
        </header>
        <article class="">
          <p class="${copyClass}">
            Dat is a nonprofit-backed community & open protocol for building apps of the future. The Dat Project imagines a web of commons created by global communities on open and secure protocols.
          </p>
          <h2 class="${headClass}">
            Code for Science & Society
          </h2>
          <p class="${copyClass}">
            Dat Project is sponsored by <a href="http://codeforscience.org">Code for Science & Society</a>, a <span class="nowrap">U.S. 501(c)(3)</span> non-profit.
          </p>
          <h2 class="${headClass}">
            Dat History
          </h2>
          <p class="${copyClass}">
            The first code went into Dat <a href="https://github.com/datproject/dat/commit/e5eda57b53f60b05c0c3d97da90c10cd17dcbe19">on August 17, 2013</a>. The first six months were spent making a prototype (thanks to the <a href="https://www.knightfoundation.org/grants/201346305/">John S. and James L. Knight foundation Prototype Fund</a>), followed by taking Dat beyond the prototype phase and into an alpha release.
          </p>
          <p class="${copyClass}">
            In the spring of 2014, we received additional support <a href="https://blog.datproject.org/2014/03/08/sloan-funding/">support from the Alfred P. Sloan foundation</a> to expand the team. Sloan’s proposition was that they like the initial Dat prototype, but wanted to see scientific data use cases be treated as top priority. As a result we expanded the scope of the project from its tabular data specific beginnings, and have focused on adding features that will help us work with larger open scientific datasets. Sloan redoubled their support in the spring of 2015, allowing us to continue to fund three positions for another two years.
          </p>
          <p class="${copyClass}">
            In the winter of 2016, the Knight Foundation provided significant funding to <a href="https://blog.datproject.org/2016/02/01/announcing-publicbits-org/">create a registry for Dat-hosted datasets</a>, as well as enabling the project to grow and establish a 501(c)(3) non-profit. In the fall of 2017, the Moore Foundation funded a project to advance the use of Dat in research through a pilot project called <a href="https://blog.datproject.org/2017/09/14/dat-in-the-lab/">Dat in the Lab</a>.
          </p>
        </article>
      </section>
      <section class="bg-neutral-04">
        <div class="${wrapper}" id="team">
          ${team()}
        </div>
      </section>
    </div>
      ${footer()}
      ${datIcons()}
    </body>
  `
}
