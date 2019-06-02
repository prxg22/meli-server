const fetch = require('../utils/fetch')

const find = async (id = '') => {
  if (!id) throw { status: 400, message: 'No id provided' }

  const itemPath = `/items/${id}`
  const descPath = `${itemPath}/description`

  const promises = [fetch(itemPath), fetch(descPath)]
  const [item, description] = await Promise.all(promises)

  return { item, description }
}

module.exports = find
