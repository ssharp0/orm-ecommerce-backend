// require dotevn (zero dependency module) to store local db sensitive information (seperate secrets from source code)
require('dotenv').config()

// require sequelize
const Sequelize = require('sequelize')

// new sequelize to use either the JAWS database (when deployed on heroku) or the local database (from env)
const sequelize = new Sequelize(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : process.env.LOCALDB_URL)

// export sequelize for use
module.exports = sequelize
