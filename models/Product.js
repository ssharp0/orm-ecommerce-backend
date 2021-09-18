// import parts of sequelize library for use
const { Model, DataTypes } = require('sequelize')
// import database connection from config
const sequelize = require('../config/connection')

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// setup fields and rules for Product table model with sequelize 
Product.init(
  {
    // define id column (integer)
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    // define product name column (string)
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define price column (decimal)
    product_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    // define product stock column (integer) - setting default value to 10
    product_stock: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    // define category id column from category model id
    category_id: {
      type: DataTypes.INTEGER,
      // reference category model id
      references: {
        model: 'category',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
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
