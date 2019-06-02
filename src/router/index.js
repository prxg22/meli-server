const Router = require('express').Router
const { search, reduce } = require('../items')
const { AUTHOR: author } = require('../config')
const router = Router()

router.get('/items', async (req, res, next) => {
  try {
    const body = await search(req.query.q)
    const items = await reduce(body)

    res.sendWithAuthor(items)
  } catch(e) {
    next(e)
  }
})

router.get('/items/:id', async (req, res, next) => {
  res.sendWithAuthor()
})

module.exports = router
