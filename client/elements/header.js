const html = require('choo/html')
const css = require('sheetify')

const logoCss = css`
  :host {
    img {
      transition: transform .5s ease-in-out;
      width: inherit;
    }
    &:hover, &:focus {
      img {
        transform: rotate(360deg);
      }
    }
  }
`

module.exports = function () {
  return html`
    <nav class="bb b--dat-neutral-10 dt w-100 w-100 border-box pa3 ph5-l">
      <div class="dtc v-mid w-25">
        <a class="${logoCss} v-mid dib link dim mr2 w2 h2" href="/" title="Dat Project">
          <img src="/public/img/dat-hexagon.svg" alt="Dat Project Logo">
        </a>
        <a class="v-mid link dim color-neutral b f5 f3-ns dib-l dn" href="/" title="Dat Project">Dat<span class="ml1 color-neutral-60">Project</span></a>
      </div>

      <div class="dtc v-mid w-75 tr">
        <a class="link dim color-neutral ttu tracked f6 f5-ns dib mr3 mr4-ns" href="https://docs.datproject.org" title="Dat Documentation">Docs</a>
        <a class="link dim color-neutral ttu tracked f6 f5-ns dib mr3 mr4-ns" href="https://blog.datproject.org"  title="Dat Blog">Blog</a>
        <a class="link dim color-neutral ttu tracked f6 f5-ns dib mr3 mr4-ns" href="/about" title="About Dat Project">About</a>
      </div>
    </nav>
  `
}
