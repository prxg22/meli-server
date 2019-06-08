describe('search', () => {
  let fetch
  let search

  beforeAll(() => {
    let path = '../../src/utils/fetch'
    jest.mock(path)
    fetch = require(path)

    path = '../../src/items/search'
    search = require(path)

  })

  it('should throw 400 if no query', async () => {
    try {
      await search()
    } catch (e) {
      expect(e).toEqual({ status: 400, message: 'Insert a query, please!' })
    }
  })

  it('should throw 404 if nothing is found', async () => {
    fetch.mockReturnValue(Promise.resolve({
      paging: { total: 0 }
    }))

    try {
      await search('test')
    } catch (e) {
      expect(e).toEqual({ status: 404, message: 'No items were found.' })
    }
  })

  it('should return items successfully', async () => {
    fetch.mockReturnValue(Promise.resolve({
      results: { id: 1 },
      paging: { total: 1 }
    }))

    const items = await search('test')
    expect(items).toEqual({ id: 1 })
  })

})
