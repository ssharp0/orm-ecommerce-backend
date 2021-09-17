// require Category model
const { Category } = require('../models')

// category seed data for use/testing
const categoryData = [
  {
    // category for shirts
    category_name: 'Shirts'
  },
  {
    // category for shorts
    category_name: 'Shorts'
  },
  {
    // category for music
    category_name: 'Music'
  },
  {
    // category for hats
    category_name: 'Hats'
  },
  {
    // category for shoes
    category_name: 'Shoes'
  }
]

// create bulk category seed data (passing through category data above)
const seedCategories = () => Category.bulkCreate(categoryData)

// export seedCategories data for use
module.exports = seedCategories
