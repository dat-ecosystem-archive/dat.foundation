const redirect = require('express-simple-redirect')
const compression = require('compression')
const path = require('path')
const http = require('http')
const express = require('express')
const app = require('./client/app')

const router = express()

// Rendering engine
router.engine('js', function (filePath, options, cb) {
  const renderer = require(filePath)
  if (!renderer) return cb(new Error('not found'))
  const contents = renderer(options)
  cb(null, contents.toString())
})
router.set('views', './views')
router.set('view engine', 'js')

router.use(compression())
router.use('/', express.static(path.join(__dirname, 'public')))

// TODO: Redirect registry API
router.use(redirect({
  '/blog': 'https://blog.datproject.org'
}, 301))

// Opts passed to template: views/page
router.get('/', getRoute({
  title: 'Welcome to Dat Project!'
}))
router.get('/about', getRoute({
  title: 'About - Dat Project'
}))
router.use(function (req, res, next) {
  res.status(404)
  getRoute({title: '404 - Dat Page Not Found'})(req, res)
})

// TODO: Redirect registry API
// What is difference b/t this and above redirect?
router.get('/blog/*', function (req, res) {
  res.redirect(301, 'http://blog.datproject.org')
})

function getRoute (opts) {
  return function send (req, res) {
    const route = req.url
    const contents = app.toString(route)
    const props = Object.assign({url: req.headers.host + route, content: contents}, opts)
    res.setHeader('Content-Type', 'text/html')
    return res.render('page', props)
  }
}

const server = http.createServer(function (req, res) {
  return router(req, res)
})
const port = process.env.PORT || 8080
server.listen(port, function (err) {
  if (err) throw err
  console.log('Listening on http://localhost:' + port)
})
