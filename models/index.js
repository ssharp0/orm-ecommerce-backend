// import models (Product, Category, Tag, ProductTag)
const Product = require('./Product')
const Category = require('./Category')
const Tag = require('./Tag')
const ProductTag = require('./ProductTag')

// Products belongsTo Category (create relation)
Product.belongsTo(Category, { foreignKey: 'category_id'})

// Categories hasMany Products (create relation)
Category.hasMany(Product, { foreignKey: 'category_id'})

// Products belongToMany Tags (through ProductTag create relation)
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id'})

// Tags belongToMany Products (through ProductTag create relation)
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id'})

// export bundle (Product, Category, Tag, and ProductTag) for use
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag
}
