const express = require('express')
const { connect } = require('./config/mongodb')
const app = express()
const port = 3000
const routes = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
app.use(errorHandler)

connect().then(async (db) => {
  console.log('database connected')
  app.listen(port, () => {
    console.log('app is running in port : ', port)
  })
})
