const html = require('choo/html')
const teamInfo = require('../team-info')

module.exports = function () {
  const flexClass = 'flex flex-wrap flex-row justify-between items-stretch'
  const copyClass = 'f4 lh-copy'

  return html`
    <div id="dat-wg">
      <h2 class="f2 horizontal-rule">Dat Project Governance Team</h2>
      <p class="${copyClass}">The Dat Project Governance Team supports the strategy and vision for Dat Project, led by core Dat Project members and long-time outside contributors. This group is also involved in financial and legal decisions regarding the Dat Project in collaboration with Code for Science and Society. Learn more about <a href="https://github.com/datproject/governance">Dat Project governance</a>.</p>
      <div class="${flexClass} w-100">
        ${teamInfo.governance.map((person) => {
    return personBox(person)
  })}
      </div>
      <h2 class="f2 horizontal-rule">Dat Protocol Working Group</h2>
      <p class="${copyClass}">The Dat Protocol Working Group advances the protocol development and third-party implementations. This group documents all aspects of the Dat Protocol specification and makes decisions regarding protocol changes. Learn more about the <a href="https://github.com/datprotocol/working-group">Dat Protocol working group</a>.</p>
      <div class="${flexClass} w-100">
        ${teamInfo.wg.map((person) => {
    return personBox(person)
  })}
      </div>
      <h2 class="f2 horizontal-rule">Key Community Collaborators</h2>
      <p class="${copyClass}">Dat Project is driven forward by many community members, most contributing as volunteers. These key collaborators contribute maintainance and development to core pieces of the Dat ecosystem.</p>
      <div class="${flexClass} w-100">
        ${teamInfo.other.map((person) => {
    return personBox(person)
  })}
      </div>
      <h2 class="f2 horizontal-rule">Alumni</h2>
      <div class="${flexClass} w-100">
        ${teamInfo.alumni.map((person) => {
    person.description = null
    return personBox(person)
  })}
      </div>
    </div>
  `

  function personBox (info) {
    const description = html`<p class="${copyClass}"></p>`
    description.innerHTML = info.description
    return html`
      <div class="inline-flex w-100 w-50-ns mw6 pa3">
        <div class="bg-white w-100 pa3 pa4-ns b--dat-blue ba bw2">
          <div class="tc">
            <a href="http://github.com/${info.github}"><img src="${avatar(info.github)}" class="br-100 h3 w3 dib" title="${info.name}" alt="${info.name}"></a>
            <h4 class="f4 mt3 mb0">${info.name}</h4>
             ${info.description ? html`<hr class="mv3 mw3 bb bw1 b--black-10">` : ''}
          </div>
          ${info.description ? description : ''}
        </div>
      </div>
    `
  }

  function avatar (username) {
    return `https://github.com/${username}.png`
  }
}
