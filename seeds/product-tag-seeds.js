// require Product model
const { ProductTag } = require('../models')

// product tag seed data for use / testing
const productTagData = [
  {
    // plain t-shirt (white)
    product_id: 1,
    tag_id: 6
  },
  {
    // plain t-shirt (gold)
    product_id: 1,
    tag_id: 7
  },
  {
    // plain t-shirt (pop culture)
    product_id: 1,
    tag_id: 8
  },
  {
    // running sneakers  (white)
    product_id: 2,
    tag_id: 6
  },
  {
    // branded baseball hat (rock music)
    product_id: 3,
    tag_id: 1
  },
  {
    // branded baseball hat (blue)
    product_id: 3,
    tag_id: 3
  },
  {
    // branded baseball hat (red)
    product_id: 3,
    tag_id: 4
  },
  {
    // branded baseball hat (green)
    product_id: 3,
    tag_id: 5
  },
  {
    // vinyl record (rock music)
    product_id: 4,
    tag_id: 1
  },
  {
    // vinyl record (pop music)
    product_id: 4,
    tag_id: 2
  },
  {
    // vinyl record (pop culture)
    product_id: 4,
    tag_id: 8
  },
  {
    // cargo shorts (blue)
    product_id: 5,
    tag_id: 3
  }
]

// create bulk product tag seed data (passing through product tag data above)
const seedProductTags = () => ProductTag.bulkCreate(productTagData)

// export seedProductTags data for use
module.exports = seedProductTags
