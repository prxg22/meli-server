const Router = require('express').Router
const { search, reduce, find, parse } = require('../items')
const router = Router()

router.get('/items', async (req, res, next) => {
  try {
    const response = await search(req.query.q, {
      limit: req.query.limit
    })
    const items = await reduce(response)

    res.sendWithAuthor(items)
  } catch(e) {
    next(e)
  }
})

router.get('/items/:id', async (req, res, next) => {
  const { id } = req.params

  try {
    const response = await find(id)
    const item = parse(response)

    res.sendWithAuthor(item)
  } catch(e) {
    next(e)
  }
})

module.exports = router
