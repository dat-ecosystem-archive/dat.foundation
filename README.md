# Dat Project Website

Code for [datproject.org](http://datproject.org) website.

#### Built With

Thanks to these great open source projects we use:

* [Choo](https://github.com/choojs/choo)
* [Tachyons](http://tachyons.io/)
* [Fair Analytics](https://github.com/vesparny/fair-analytics)

## Development

There are two server options, one using [Bankai](https://github.com/choojs/bankai) and one using [Express](https://expressjs.com/). Bankai works for most situations, we use express for deployment for easier redirects.

* `npm run dev` - run development server & watch file changes
* `npm run build` - bundle assets
* `npm start` - bundle assets and run express server
* `npm run server` - run express server (assets must be bundled already)

### Deployment

* Deploy to server of choice
* Build static assets: `npm run build`
* Run server: `npm run server`
