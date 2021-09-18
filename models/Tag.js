// import parts of sequelize library for use
const { Model, DataTypes } = require('sequelize')

// import database connection from config
const sequelize = require('../config/connection.js')

// Initialize Product Tag model(table) by extending off Sequelize's Model class
class Tag extends Model {}

// setup fields and rules for Tag table model with sequelize 
Tag.init(
  {
    // define id column (integer)
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    // define tag name column (string)
    tag_name: {
      type: DataTypes.STRING,
    }
  },
  {
    // model name tag
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag'
  }
)

// export Tag for use
module.exports = Tag
