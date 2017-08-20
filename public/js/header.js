var html = require('choo/html')
var css = require('sheetify')

var headerStyles = css`
 :host {
   height: var(--site-header-height);
   background-color: var(--color-white);
   border-bottom: 1px solid var(--color-neutral-10);
 }
`

var navStyles = css`
  :host {
    display: flex;
    height: var(--site-header-height);
    align-items: center;
  }
`

const header = () => {
  return html`<div>
    <header class="relative ${headerStyles}">
      <div class="container container--top-bar">
        <div class="flex justify-between items-center relative">
          <nav class="flex items-center ${navStyles}">
            <a href="/" data-no-routing class="dat-logo">
              <img src="/public/img/dat-hexagon.svg" />
              <span class="dat-logo__word">Dat</span>
            </a>
            <a href="/docs" class="header-nav-link">Docs</a>
            <a href="/team" class="header-nav-link">Team</a>
            <a href="/about" class="header-nav-link">About</a>
          </nav>
          <div>
          </div>
        </div>
      </div>
    </header>
  </div>`
}

module.exports = header
