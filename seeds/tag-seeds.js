// require Product model
const { Tag } = require('../models')

// tag seed data for use / testing
const tagData = [
  {
    // rock music tag
    tag_name: 'rock music'
  },
  {
    // pop music tag
    tag_name: 'pop music'
  },
  {
    // blue tag
    tag_name: 'blue'
  },
  {
    // red tag
    tag_name: 'red'
  },
  {
    // green tag
    tag_name: 'green'
  },
  {
    // white tag
    tag_name: 'white'
  },
  {
    // gold tag
    tag_name: 'gold'
  },
  {
    // pop culture
    tag_name: 'pop culture'
  }
]

// create bulk tag seed data (passing through tags data above)
const seedTags = () => Tag.bulkCreate(tagData)

// export seedTags data for use
module.exports = seedTags
