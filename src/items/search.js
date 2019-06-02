const fetch = require('../utils/fetch')

const search = async (query = '', { limit = 4 } = {}) => {
  if (!query) throw { status: 400, message: 'Insert a query, please!' }

  let path = `/sites/MLA/search?q=${query}`
  if (limit) path += `&limit=${limit}`
  console.log(path)
  const body = await fetch(path)

  if (!body.paging.total)
    throw { status: 404, message: 'No items were found.' }

  return body.results
}

module.exports = search
