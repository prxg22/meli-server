const request = require('node-fetch')
const { MELI_API } = require('../config')
const fetch = async (path, { errors = {}, ...options } = {}) => {
    const res = await request(`${MELI_API}${path}`, options)

    if (!res.ok) {
      const { status } = res
      throw { status, message: errors[status] }
    }

    return res.json()
}

module.exports = fetch
