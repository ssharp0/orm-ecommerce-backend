// import parts of sequelize library for use
const { Model, DataTypes } = require('sequelize')
// import database connection from config
const sequelize = require('../config/connection.js')

// Initialize Category model (table) by extending off Sequelize's Model class
class Category extends Model { }

// setup fields and rules for Product table model with sequelize 
Category.init(
  {
    // define id column (integer)
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // define category name column (string)
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // model name category
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category'
  }
)

// export Category for use
module.exports = Category
