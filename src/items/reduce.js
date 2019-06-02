const fetch = require('../utils/fetch')

const reducer = async (acc, i) => {
  const {
    id,
    title,
    shipping,
    installments,
    condition,
    category_id,
    currency_id,
    price: amount
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
  }

  const previous = await acc;

  const categories = [ ...previous.categories, category_id ]
  const items = [ ...previous.items, item ]

  return {
    categories,
    items,
  }
}

const reduce = async (items) => items.reduce(reducer, {
  items: [],
  categories: [],
})

module.exports = reduce
