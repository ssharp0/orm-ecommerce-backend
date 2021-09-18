// import parts of sequelize library for use
const { Model, DataTypes } = require('sequelize')

// import database connection from config
const sequelize = require('../config/connection')

// Initialize Product Tag model(table) by extending off Sequelize's Model class
class ProductTag extends Model {}

// setup fields and rules for Product Tag table model with sequelize 
ProductTag.init(
  {

  },
  {
    // model name product_tag
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag'
  }
)

// export ProductTag for use
module.exports = ProductTag
