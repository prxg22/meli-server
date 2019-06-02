const parse = ({ item: i, description: desc }) => {
  const {
    id,
    title,
    pictures,
    currency_id,
    sold_quantity,
    shipping,
    condition,
    price: amount,
  } = i

  const { free_shipping } = shipping || {}
  const [ firstPicture = {} ] = pictures || []
  const { url: picture } = firstPicture

  let description
  if (desc) description = desc.plain_text


  const item = {
    id,
    title,
    price: {
      currency: currency_id,
      amount,
    },
    free_shipping,
    condition,
    description,
    picture,
  }

  return item
}

module.exports = parse
