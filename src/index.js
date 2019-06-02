require('dotenv').config()
const express = require('express')
const { PORT: port, AUTHOR: author } = require('./config')
const router = require('./router')
const error = require('./utils/error')

const app = express()

app.use((req, res, next) => {
  res.sendWithAuthor = (response = {}) => res.send({
    author,
    ...response
  })
  next()
})

app.use('/api', router)
app.use((req, res, next) => {
  next({ status: 404, message: 'resource not found' })
})

app.use(error)

app.listen(port, () => {
  console.log(`Listening on ${port} 🚀`)
})
