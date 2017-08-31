const redirect = require('express-simple-redirect')
const compression = require('compression')
const path = require('path')
const express = require('express')
const client = require('./client')

const app = express()

// Rendering engine
app.engine('js', function (filePath, options, cb) {
  const renderer = require(filePath)
  if (!renderer) return cb(new Error('not found'))
  const contents = renderer(options)
  cb(null, contents.toString())
})
app.set('views', './views')
app.set('view engine', 'js')

app.use(compression())

// TODO: Redirect registry API
app.use(redirect({
  '/blog': 'https://blog.datproject.org'
}, 301))

// Opts passed to template: views/page
app.get('/', getRoute({
  title: 'Welcome to Dat Project!'
}))
app.get('/about', getRoute({
  title: 'About - Dat Project'
}))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(function (req, res, next) {
  res.status(404)
  getRoute({title: '404 - Dat Page Not Found'})(req, res)
})

// TODO: Redirect registry API
// What is difference b/t this and above redirect?
app.get('/blog/*', function (req, res) {
  res.redirect(301, 'http://blog.datproject.org')
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
