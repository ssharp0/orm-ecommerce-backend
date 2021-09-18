// require express to use express module
const router = require('express').Router()
// require Tag, Product, and Product Tag models
const { Tag, Product, ProductTag } = require('../models')

// The `/api/tags` endpoint

// get all tags
router.get('/tags', (req, res) => {
  // find all tags
  Tag.findAll({
    // include associated Product model attributes
    include: {
      model: Product,
      attribtues: ['product_name', 'product_price', 'product_stock', 'category_id']
    }
  })
    // then for response
    .then(tagsData => {
      // if there is no database tags data then status of 404 to message no tags found
      if (!tagsData) {
        res.status(400).json({message: 'No tags found'})
        return
      }
      // else return the response json tags data
      res.json(tagsData)
    })
    // catch error and log error
    .catch(err => console.log(err))
})

// get tags by id
router.get('/tags/:id', (req, res) => {
  // find a single tag by its `id` value
  Tag.findOne({
    // where the database tag id matches the request parameters id provided
    where: { id: req.params.id },
    // include associated Product model attributes: product_name and product_price
    include: {
      model: Product,
      attributes: ['product_name', 'product_price', ]
    }
  })
    // then for response
    .then(tagData => {
      // if there is no database tag data that matches request id then status 404 to message no tag found
      if (!tagData) {
        res.status(404).json({ message: 'No tag found with this id'})
        return
      }
      // else return the response json tag data
      res.json(tagData)
    })
    // catch and log error
    .catch(err => console.log(err))
})

// post new tags
router.post('/tags', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
    // then return response json tag data
    .then(tagData => res.json(tagData))
    // catch and log error
    .catch(err => console.log(err))
})

// udpate tag
router.put('/tags/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    // where the database category id matches the request parameters id
    where: { id: req.params.id }
  })
    // then for response
    .then(tagData => {
      // if there is no database tag id data that matches request id then status of 404 to message no tag found
      if (!tagData) {
        res.status(404).json({ message: 'No tag found with this id to update'})
        return
      }
      // else return the response json tag data
      res.json(tagData)
    })
    // catch and log error
    .catch(err => console.log(err))
})

// delete tag
router.delete('/tags/:id', (req, res) => {
  // delete a tag by its `id` value
  Tag.destroy({
    // where the database tag id matches the request parameters id
    where: { id: req.params.id }
  })
    .then(tagData => {
      // if there is no database tag id that matches the request id then status of 404 to message no tag found
      if (!tagData) {
        res.status(404).json({ message: 'No tag found with this id to delete'})
        return
      }
      // else return the response json tag data
      res.json(tagData)
    })
    // catch and log error
    .catch(err => console.log(err))
})

// export router for use
module.exports = router
