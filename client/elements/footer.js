const html = require('choo/html')

module.exports = function () {
  return html`
  <footer class="bg-neutral white">
    <section class="pa2 pa4-l mw8-ns center-ns">
      <div class="pt3 cf">
        <div class="fl w-third">
          <h4 class="horizontal-rule-footer">Explore</h4>
          <ul class="dat-list p0 list">
            <li><a href="/explore">Explore Datasets</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="https://blog.datproject.org">Blog</a></li>
          </ul>
        </div>
        <div class="fl w-third">
          <h4 class="horizontal-rule-footer">Learn</h4>
          <ul class="dat-list p0 list">
            <li><a href="/about">About</a></li>
            <li><a href="http://docs.datproject.org">Docs</a></li>
          </ul>
        </div>
        <div class="fl w-third">
          <h4 class="horizontal-rule-footer">Connect</h4>
          <ul class="dat-list list p0">
            <li><a href="https://twitter.com/dat_project">Twitter</a></li>
            <li><a href="https://github.com/datproject">GitHub</a></li>
            <li>
              <a href="https://tinyletter.com/datdata" target="_blank">Newsletter </a>
            </li>
            <li><a href="https://www.stickermule.com/en/marketplace/9709-dat-data-v3">Get Stickers</a></li>
          </ul>
        </div>
      </div>
      <p class="">
        <strong>Dat</strong> 2017 • Page source on <a href="https://github.com/datproject/datproject.org">github</a>
      </p>
    </section>
  </footer>
  `
}
