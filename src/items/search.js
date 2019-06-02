const fetch = require('../utils/fetch')

const search = async (query = '') => {
  if (!query) throw { status: 400, message: 'Insert a query, please!' }

  const path = `/sites/MLA/search?q=${query}`

  const body = await fetch(path)

  if (!body.paging.total)
    throw { status: 404, message: 'No items were found.' }

  return body.results
}

module.exports = search
