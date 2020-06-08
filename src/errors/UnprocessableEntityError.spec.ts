import { UnprocessableEntityError } from './UnprocessableEntityError'

describe('UnprocessableEntityError', () => {
  it('should be an instance of UnprocessableEntityError', () => {
    const instance = new UnprocessableEntityError()

    expect(instance).toBeInstanceOf(UnprocessableEntityError)
  })

  it('should have a property of message', () => {
    const instance = new UnprocessableEntityError()

    expect(instance).toHaveProperty('message', 'Resource already exists')
  })

  it('should have a property of statusCode', () => {
    const instance = new UnprocessableEntityError()

    expect(instance).toHaveProperty('statusCode', 422)
  })

  it('should return an array with message object when serializeError method is called', () => {
    const error = 'User already exists'
    const instance = new UnprocessableEntityError(error)

    expect(instance.serializeErrors()).toEqual([
      { message: error }
    ])
  })
})
