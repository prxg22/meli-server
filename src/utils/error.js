const error = (e, req, res, next) => {
  if (res.headersSent) next(e)
  console.error(e)
  res.status(e.status || 500).send(e.message || '')
}

module.exports = error
