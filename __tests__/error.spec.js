describe('error', () => {
  const error = require('../src/utils/error')
  let res

  beforeAll(() => {
    res = {
      status: jest.fn(() => res),
      send: jest.fn(() => res)
    }
  })

  it('should respond with correct status', () => {
      const errs = [
        { status: 500 },
        { status: 500, message: 'Server error' },
        { status: 300, message: 'more than one possible response'},
      ]

      errs.forEach(e => {
        error(e, {}, res)
        expect(res.status).toHaveBeenCalledWith(e.status)
        expect(res.send).toHaveBeenCalledWith(e.message || '')
      })
  })

  it('should responde 500 on Node error', () => {
    error(Error('error'), {}, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.send).toHaveBeenCalledWith('error')
  })
})
