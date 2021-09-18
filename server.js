// require express to use express module
const express = require('express')

// import sequelize connection
const sequelize = require('./config/connection')

// call express function to start new express application
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application to use routes
app.use(require('./routes'))

// sync sequelize models to the database, then turn on the server
// can use sequelize.sync({ force: true }) to delete all data to restart
sequelize.sync()
 .then(() => app.listen(process.env.PORT || 3000))
 .catch(err => console.log(err))

