// require Product model
const { Product } = require('../models')

// product seed data for use / testing
const productData = [
  {
    // product plain t-shirt assigned to category with id 1 (Shirts)
    product_name: 'Plain T-Shirt',
    product_price: 14.99,
    product_stock: 14,
    category_id: 1
  },
  {
    // product running sneakers assigned to category with id 5 (Shoes)
    product_name: 'Running Sneakers',
    product_price: 90.0,
    product_stock: 25,
    category_id: 5
  },
  {
    // product branded baseball hat assigned to category with id 4 (Hats)
    product_name: 'Branded Baseball Hat',
    product_price: 22.99,
    product_stock: 12,
    category_id: 4
  },
  {
    // product top 40 music comp vinyl record assigned to category with id 3 (Music)
    product_name: 'Top 40 Music Compilation Vinyl Record',
    product_price: 12.99,
    product_stock: 50,
    category_id: 3
  },
  {
    // cargo shorts assigned to category with id 2 (Shorts)
    product_name: 'Cargo Shorts',
    product_price: 29.99,
    product_stock: 22,
    category_id: 2
  }
]

// create bulk products seed data (passing through products data above)
const seedProducts = () => Product.bulkCreate(productData)

// export seedProducts data for use
module.exports = seedProducts
