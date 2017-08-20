const redirect = require('express-simple-redirect')
const compression = require('compression')
const path = require('path')
const http = require('http')
const express = require('express')
const app = require('./public/js/app')
const page = require('./public/js/page')

var router = express()
router.use(compression())
router.use('/public', express.static(path.join(__dirname, 'public')))
router.use(redirect({
  '/blog': 'https://blog.datproject.org'
}, 301))
router.get('/', send)
router.get('/about', send)
router.get('/team', send)
router.get('/blog/*', function (req, res) {
  res.redirect(301, 'http://blog.datproject.org')
})

function send (req, res) {
  var route = req.url
  const contents = app.toString(route)
  res.setHeader('Content-Type', 'text/html')
  var url = req.headers.host + route
  return res.end(page(url, contents))
}

var server = http.createServer(function (req, res) {
  return router(req, res)
})
var port = process.env.PORT || 8080
server.listen(port, function (err) {
  if (err) throw err
  console.log('Listening on http://localhost:' + port)
})
