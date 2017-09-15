const microanalytics = require('microanalytics')

module.exports = function (state, emitter) {
  const analytics = microanalytics(process.env.ANALYTICS)
  state.events.TRACK_CTA = 'trackCta'
  state.events.TRACK_CTAEL = 'trackCtaEl'
  state.analytics = {
    scrollPer: 0,
    ctaEls: [],
    ctaViews: {}
  }

  emitter.once(state.events.DOMCONTENTLOADED, trackInbound)
  emitter.once(state.events.DOMCONTENTLOADED, trackScroll)
  emitter.on(state.events.NAVIGATE, trackScroll)
  emitter.on(state.events.NAVIGATE, trackView)
  emitter.on(state.events.TRACK_CTA, trackCta)
  emitter.on(state.events.NAVIGATE, trackExit)
  window.onbeforeunload = trackExit

  // todo: better way to track viewing + clicking specific els?
  emitter.on(state.events.TRACK_CTAEL, function (el) {
    state.analytics.ctaEls.push(el)
  })

  emitter.emit('log:info', `Sending analytics to ${process.env.ANALYTICS}`)

  function trackInbound () {
    analytics.append(setDefaults('pageView', {
      sourceUrl: document.referrer
    }))
  }

  function trackView (e) {
    analytics.append(setDefaults('pageView'))
  }

  function trackScroll () {
    window.addEventListener('scroll', pageScroll)

    function pageScroll () {
      state.analytics.scrollPer = Math.max(getScrollPercent(), state.analytics.scrollPer)
      state.analytics.ctaEls.map((el, i) => {
        if (isScrolledIntoView(el)) {
          state.analytics.ctaViews[el.id] = {text: el.innerHTML, url: el.href}
          state.analytics.ctaEls.splice(i, 1)
        }
      })
      if (state.analytics.scrollPer === 100) {
        window.removeEventListener('scroll', pageScroll)
      }
    }

    function isScrolledIntoView (el) {
      var elemTop = el.getBoundingClientRect().top
      var elemBottom = el.getBoundingClientRect().bottom

      var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
      return isVisible
    }

    function getScrollPercent () {
      var h = document.documentElement
      var b = document.body
      var st = 'scrollTop'
      var sh = 'scrollHeight'
      return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100
    }
  }

  function trackCta (e) {
    state.analytics.ctaViews[e.target.id].clicked = true

    analytics.append(setDefaults('ctaClick', {
      destination: e.target.href,
      ctaClick: state.analytics.ctaViews[e.target.id]
    }))
  }

  function trackExit () {
    analytics.append(setDefaults('pageExit', {
      scrollPercentage: state.analytics.scrollPer.toFixed(2),
      ctaViews: state.analytics.ctaViews
    }))
  }

  function setDefaults (name, opts) {
    return Object.assign({
      event: `${window.location.hostname}-${name}`,
      pathname: window.location.pathname
    }, opts)
  }
}
