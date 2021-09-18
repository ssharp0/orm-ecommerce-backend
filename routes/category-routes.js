// require express to use express module
const router = require('express').Router()
// require Category and Product models
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

// get all categories
router.get('/categories', (req, res) => {
  // find all categories
  Category.findAll({
    // include associated Product model attributes
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'product_price', 'product_stock', 'category_id']
    }
  })
    // then for response
    .then(categoriesData => {
      // if there is no categories data then status of 404 to message no categories found
      if (!categoriesData) {
        res.status(404).json({message: 'No categories found'})
        return
      }
      // else return the response json categories data
      res.json(categoriesData)
    })
    // catch error and log error
    .catch(err => console.log(err))
})

// get categories by id
router.get('/categories/:id', (req, res) => {
  // find a single category by its `id` value
  Category.findOne({
    // where the db category id matches the request paramters id provided
    where: { id: req.params.id },
    // include associated Product model attributes (all)
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'product_price', 'product_stock', 'category_id']
    }
  })
    // then for response
    .then(categoryData => {
      // if there is no category data that matches response id then status of 404 to message no category found
      if (!categoryData) {
        res.status(404).json({message: 'No category found with this id'})
        return
      }
      // else return the response json category data
      res.json(categoryData)
    })
    // catch and log error
    .catch(err => console.log(err))
})

// post new categories
router.post('/categories', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  // then return response json category data
    .then(categoryData => res.json(categoryData))
    // catch and log error
    .catch(err => console.log(err))
})

// update category
router.put('/categories/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    // where the database category id matches the request paramters id
    where: { id: req.params.id}
  })
    // then for response
    .then(categoryData => {
      // if there is no database category id data that matches response id then status of 404 to message no category found
      if (!categoryData) {
        res.status(404).json({message: 'No category found with this id to update'})
        return
      }
      // else return the response json category data
      res.json(categoryData)
    })
    // catch and log error
    .catch(err => console.log(err))
})

// delete category
router.delete('/categories/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    // where the database category id matches the request parameters id
    where: { id: req.params.id }
  })
    // then for response
    .then(categoryData => {
      // if there is no category data that matches response id then status of 404 to message no category found
      if (!categoryData) {
        res.status(404).json({message: "No category found with this id to delete"})
        return
      }
      // else return the response json category data
      res.json(categoryData)
    })
    // catch and log error
    .catch(err => console.log(err))
})

// export router for use
module.exports = router
