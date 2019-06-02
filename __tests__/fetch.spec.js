describe('fetch', () => {
  let request
  let fetch

  beforeAll(() => {
    let path = 'node-fetch'
    jest.mock(path)
    request = require(path)

    path = '../src/utils/fetch'
    fetch = require(path)
  })

  beforeEach(() => {
    request.mockReset()
  })

  it('should throw 500 on error', async () => {
    request.mockImplementation(() => { throw Error('error') })

    try {
      await fetch('test')
    } catch(e) {
      expect(e).toEqual({
        status: 500,
        message: 'Server error!'
      })
    }
  })

  it('should throw correct error on response not ok', async () => {
    request.mockReturnValue(Promise.resolve({
      ok: false,
      status: 300,
    }))

    try {
      await fetch('test')
    } catch(e) {
      expect(e).toEqual({
        status: 300,
        message: '',
      })
    }
  })

  it('should return custom errors', async () => {
    request.mockReturnValue(Promise.resolve({
      ok: false,
      status: 404,
    }))

    const errors = {
      404: 'page not found'
    }

    try {
      await fetch('test', { errors })
    } catch(e) {
      expect(e).toEqual({
        status: 404,
        message: errors[404],
      })
    }
  })

  it('should return fetch response correctly', async () => {
    const res = { id: 1 }
    request.mockReturnValue(Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(res)
    }))

    const response = await fetch('test')

    expect(response).toEqual(res)
  })
})
