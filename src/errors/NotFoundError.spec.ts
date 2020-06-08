import { NotFoundError } from './NotFoundError'

describe('NotFoundError', () => {
  const path = '/api/routes/not-found'
  

  it('should be an instance of NotFoundError', () => {
    const instance = new NotFoundError(path)

    expect(instance).toBeInstanceOf(NotFoundError)
  })

  it('should have a property of statusCode', () => {
    const instance = new NotFoundError(path)

    expect(instance).toHaveProperty('statusCode', 404)
  })

  it('should return an array with reason object when serializeError method is called', () => {
    const error = 'Route Not Found'
    const instance = new NotFoundError(path, error)

    expect(instance.serializeErrors()).toEqual([{ message: error, field: path }])
  })
})
