// import parts of sequelize library for use
const { Model, DataTypes } = require('sequelize')

// import database connection from config
const sequelize = require('../config/connection')

// Initialize Product Tag model(table) by extending off Sequelize's Model class
class ProductTag extends Model {}

// setup fields and rules for Product Tag table model with sequelize 
ProductTag.init(
  {
    // define id column (integer)
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    // define product id column from product model id
    product_id: {
      type: DataTypes.INTEGER,
      // reference product model id
      references: {
        model: 'product',
        key: 'id'
      }
    },
    // define tag id column from tag model id
    tag_id: {
      type: DataTypes.INTEGER,
      // reference tag model id
      references: {
        model: 'tag',
        key: 'id'
      }
    }
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
