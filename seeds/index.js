// require all seed data for categories, products, tags, and product-tags (from seeds)
const seedCategories = require('./category-seeds')
const seedProducts = require('./product-seeds')
const seedTags = require('./tag-seeds')
const seedProductTags = require('./product-tag-seeds')

// import sequelize connection to sequelize seed data into database below
const sequelize = require('../config/connection')

// fucntion to sequelize all seed data to add seed data to database
const seedAll = async () => {
  await sequelize.sync({ force: true })
  console.log('\n----- DATABASE SYNCED -----\n')

  // seed categories
  await seedCategories()
  console.log('\n----- CATEGORIES SEEDED -----\n')

  // seed products
  await seedProducts()
  console.log('\n----- PRODUCTS SEEDED -----\n')

  // seed tags
  await seedTags()
  console.log('\n----- TAGS SEEDED -----\n')

  // seed product tags
  await seedProductTags()
  console.log('\n----- PRODUCT TAGS SEEDED -----\n')

  // exit process
  process.exit(0)
}

// call the function to seed all data
seedAll()
