const fs = require('fs')
const path = require('path')
const express = require('express')
const redirect = require('express-simple-redirect')
const compression = require('compression')
const client = require('./client')

const app = express()

// Rendering engine
app.engine('js', function (filePath, options, cb) {
  const renderer = require(filePath)
  if (!renderer) return cb(new Error('not found'))
  const contents = renderer(options)
  cb(null, contents)
})
app.set('views', './views')
app.set('view engine', 'js')

app.use(compression())

// Redirects
app.use(redirect(require('./redirects.json'), 301))
app.get('/blog/*', function (req, res) {
  res.redirect(301, 'https://blog.datproject.org')
})
app.get('/api/*', function (req, res) {
  res.redirect(301, 'https://datbase.org' + req.url)
})
app.get('/dat://:archiveKey*', function (req, res) {
  res.redirect(301, 'https://datbase.org' + req.url)
})
app.get(/\/?([^/]{64})(\/.*)?/, function (req, res) {
  res.redirect(301, 'https://datbase.org/dat:/' + req.url)
})

// Static Routes
// Options passed to template: views/page
app.get('/', getRoute())
app.get('/about', getRoute({
  title: 'About - Dat Project'
}))
app.get('/paper', function (req, res) {
  fs.createReadStream(path.join(__dirname, 'public', 'dat-paper.pdf')).pipe(res)
})

// Static Files
app.use('/', express.static(path.join(__dirname, 'public')))

// 404 Error
app.use(function (req, res, next) {
  res.status(404)
  getRoute({title: '404 - Dat Page Not Found'})(req, res)
})

function getRoute (opts) {
  return function send (req, res) {
    const route = req.url
    const contents = client.toString(route)
    const props = Object.assign({url: req.headers.host + route, content: contents}, opts)
    res.setHeader('Content-Type', 'text/html')
    return res.render('page', props)
  }
}

const port = process.env.PORT || 8080
app.listen(port, function (err) {
  if (err) throw err
  console.log('Listening on http://localhost:' + port)
})
