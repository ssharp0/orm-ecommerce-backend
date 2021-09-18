// import parts of sequelize library for use
const { Model, DataTypes } = require('sequelize')
// import database connection from config
const sequelize = require('../config/connection')

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// setup fields and rules for Product table model with sequelize 
Product.init(
  {

  },
  {
    // model name product
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
  }
)

// export Product for use
module.exports = Product
