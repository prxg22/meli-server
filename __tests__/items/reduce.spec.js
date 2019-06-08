describe('reduce', () => {
  let items
  let reducer
  beforeAll(() => {
    items = require('../mock/items.json')
    reducer = require('../../src/items/reduce')
  })

  it('should not accept a not array', () => {
    expect(() => reducer('test')).toThrow()
  })

  it('should return an empty result on empty array', () => {
    expect(reducer([])).toEqual({ categories: [], items: [] })
  })

  it('should reduce items array to result', () => {
    const result = reducer(items)
    const expected = {
      categories: [ 'MLA1055', 'MLA373780' ],
      items: [
        {
          id: 'MLA724216545',
          title: 'Celular Libre Apple iPhone 6 Gris 32gb',
          price: {
            amount: 21999,
            currency: 'ARS'
          },
          free_shipping: false,
          condition: 'new',
          picture: 'http://mla-s2-p.mlstatic.com/967462-MLA31020499915_062019-I.jpg'
        },
        {
          id: 'MLA653282516',
          title: 'Macbook Air Modelo A1466 13.3 I5 8gb Ssd 512/256/128 Garanti',
          price: {
            amount: 79999,
            currency: 'ARS'
          },
          free_shipping: true,
          condition: 'new',
          picture: 'http://mla-s1-p.mlstatic.com/645129-MLA31012466696_062019-I.jpg'
        }
      ]
    }

    expect(result).toEqual(expected)
  })
})
