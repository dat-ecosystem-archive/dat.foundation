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
            Dat is a community-driven project for distributed data syncronization. The Dat Foundation imagines a web of commons created by global communities on open and secure protocols. We set out to improve access to public data and created a new protocol along the way, read more at <a href="https://www.datprotocol.com">datprotocol.com</a>. In our work on developing Dat, we found a under-served need. Decentralized software has potential to return control of digital information to the people. Today, building peer-to-peer applications presents both technical and ethical challenges but Dat is slowly changing that.
          </p>
          <p class="${copyClass}">
            To encourage people to experiment and innovate with decentralized technology, we aim to make Dat foundational software for peer-to-peer applications – one that is sponsored by a mission-driven nonprofit. To realize this future, we aim to make Dat good at supporting the core needs of peer-to-peer applications. We hope that with our small but critical focus, we can create a strong building block for the Dat ecosystem.
          </p>
          <p class="${copyClass}">
            The first code went into Dat <a href="https://github.com/datproject/dat/commit/e5eda57b53f60b05c0c3d97da90c10cd17dcbe19">on August 17, 2013</a>. Throughout its history, Dat has had a primary focus on Dat sharing in civic data and research, only recently with a wider focus on more general decentralized applications. Dat has been almost exclusively funded by grants from private foundations, <a href="https://blog.datproject.org/2017/09/15/dat-funding-history"/>read more on the funding history</a>.
          </p>
          <h2 class="${headClass}">
            Supporters
          </h2>
          <p class="${copyClass}">
            Dat Foundation is sponsored by <a href="http://codeforscience.org">Code for Science & Society</a>, a <span class="nowrap">U.S. 501(c)(3)</span> nonprofit. We received initial funding from the <a href="https://knightfoundation.org/">Knight Foundation</a>, the <a href="https://sloan.org/">Alfred P. Sloan Foundation</a>, the <a href="https://www.moore.org/">Gordon and Betty Moore Foundation</a>.
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
