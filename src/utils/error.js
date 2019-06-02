const error = (e, req, res, next) => {
  console.error(e)
  res.status(e.status || 500).send(e.message || '')
}

module.exports = error
