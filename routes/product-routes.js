// require express to use express module
const router = require('express').Router()
// require Product, Category, Tag, and ProductTag models
const { Product, Category, Tag, ProductTag } = require('../models')

// The `/api/products` endpoint

// get all products
router.get('/products', (req, res) => {
  // find all products
  Product.findAll({
    // find all attributes for products
    // attributes: ['id', 'product_name', 'product_price', 'product_stock'],
    // include associated category name and tag name
    include: [
      {
        // include from Category model attribute category_name
        model: Category,
        attributes: ['category_name']
      },
      {
        // include from Tag model attribute tag_name
        model: Tag,
        attributes: ['tag_name']
      }
    ]
  })
    // then return the response json products data
    // .then(productsData => res.json(productsData))
    // then for response
    .then(productsData => {
      // if there is no products found then status of 404 to message no products found
      if (!productsData) {
        res.status(400).json({message: 'No products found'})
        return
      }
      // else return the response json products data
      res.json(productsData)
    })
    // catch error and log error
    .catch(err => console.log(err))
})

// get one products by id
router.get('/products/:id', (req, res) => {
  // find a single product by its `id` value
  Product.findOne({
    // where the db product id matches the request parameters id provided
    where: { id: req.params.id },
    // find product attributes (all)
    attributes: ['id', 'product_name', 'product_price', 'product_stock'],
    // include associated category name and tag name
    include: [
      {
        // include associated Category model attribute category_name
        model: Category,
        attributes: ['category_name']
      },
      {
        // include asscoiated Tag model attribute tag_name
        model: Tag,
        attributes: ['tag_name']
      }
    ]
  })
    // then for resonse
    .then(productData => {
      // if there is no product data that matches response id then status 404 to message no product found
      if (!productData) {
        res.sendStatus(404).json({message: 'No product found with this id'})
        return
      }
      // else return the response json product data
      res.json(productData)
    })
    // catch and log error
    .catch(err => console.log(err))
})

// post new products
router.post('/products', (req, res) => {
  // create a new product (can have multiple tags which will be handled below)
  Product.create({
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    product_stock: req.body.product_stock,
    category_id: req.body.category_id,
    // tag ids in bulk below
    tagIds: req.body.tagIds
  })
    // then for response
    .then((product) => {
      // if there's product tags, need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        // map the request body tagIds to tag_id
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id
          }
        })
        return ProductTag.bulkCreate(productTagIdArr)
      }
      // if no product tags, just respond
      res.status(200).json(product)
    })
    // then send status 200 and json product tag ids
    .then((productTagIds) => res.status(200).json(productTagIds))
    // catch error and log error and send status 400 error
    .catch((err) => {
      console.log(err)
      res.status(400).json(err)
    })
})

// update product
router.put('/products/:id', (req, res) => {
  // update a product by it's 'id' value
  Product.update(req.body, {
    // where database product id matches the request parameters id
    where: { id: req.params.id }
  })
    // then for response
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } })
    })
    // then for response
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id)
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id
          }
        })
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id)

      // run both actions
      return Promise.all([
        // delete product tag where database id matches remove request id
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags)
      ])
    })
    // then for response return json updated product tags
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err)
    })
})

// delete products
router.delete('/products/:id', (req, res) => {
  // delete a product by its `id` value
  Product.destroy({
    // where the database product id matches the request parameters id
    where: { id: req.params.id }
  })
  // then for response
    .then(productData => {
      // if there is no product data that matches resonse id then status of 404 message no product found
      if (!productData) {
        res.status(404).json({ message: 'No product found with this id to delete'})
        return
      }
      // else return the response json product data
      res.json(productData)
    })
    // catch error and log error
    .catch(err => console.log(err))
})

// export router for use
module.exports = router
