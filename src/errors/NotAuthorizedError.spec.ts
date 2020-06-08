import { NotAuthorizedError } from './NotAuthorizedError'

describe('NotAuthorizedError', () => {
  it('should be an instance of NotAuthorizedError', () => {
    const instance = new NotAuthorizedError()

    expect(instance).toBeInstanceOf(NotAuthorizedError)
  })

  it('should have a property of statusCode', () => {
    const instance = new NotAuthorizedError()

    expect(instance).toHaveProperty('statusCode', 401)
  })

  it('should return an array with message object when serializeError method is called', () => {
    const error = 'Not Authorized to access this resource'
    const instance = new NotAuthorizedError(error)

    expect(instance.serializeErrors()).toEqual([{ message: error }])
  })
})
