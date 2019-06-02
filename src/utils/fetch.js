const request = require('node-fetch')
const { MELI_API } = require('../config')

const error = (e, errors = {}) => {
  const status = e.status || 500

  const err = {
    status,
    message: errors[status]
      || (status === 500 && 'Server error!')
      || ''
  }

  throw err
}

const fetch = async (path, { errors, ...options } = {}) => {
  try {
    const res = await request(`${MELI_API}${path}`, options)

    if (!res.ok) {
      const { status } = res
      throw { status }
    }

    return res.json()
  } catch (e) {
    error(e, errors)
  }
}

module.exports = fetch
