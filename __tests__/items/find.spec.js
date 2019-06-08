describe('find', () => {
  let fetch
  let find

  beforeAll(() => {
    let path = '../../src/utils/fetch'
    jest.mock(path)
    fetch = require(path)

    path = '../../src/items/find'
    find = require(path)
  })

  it('', () => {})
})
