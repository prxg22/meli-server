const fetch = require('../utils/fetch')
const parse = require('./parse')

const reducer = (acc, i) => {
  const {
    id,
    title,
    shipping,
    installments,
    condition,
    category_id,
    currency_id,
    price: amount,
    thumbnail: picture,
  } = i

  const { free_shipping } = shipping || {}

  const item = {
    id,
    title,
    price: {
      currency: currency_id,
      amount,
    },
    free_shipping,
    condition,
    picture,
  }

  const categories = [ ...acc.categories, category_id ]
  const items = [ ...acc.items, item ]

  return {
    categories,
    items,
  }
}

const reduce = (items) => items.reduce(reducer, {
  items: [],
  categories: [],
})

module.exports = reduce
