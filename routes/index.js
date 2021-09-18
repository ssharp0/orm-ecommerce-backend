// require express router
const router = require('express').Router()

// prefix api for routes
router.use('/api', require('./category-routes.js'))
router.use('/api', require('./product-routes.js'))
router.use('/api', require('./tag-routes.js'))

// use the router and send response for wrong route
router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>')
})

// export router for use
module.exports = router
