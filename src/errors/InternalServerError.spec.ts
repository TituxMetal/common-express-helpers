import { InternalServerError } from './InternalServerError'

describe('InternalServerError', () => {
  it('should be an instance of InternalServerError', () => {
    const instance = new InternalServerError()

    expect(instance).toBeInstanceOf(InternalServerError)
  })

  it('should have a property of message', () => {
    const instance = new InternalServerError()
    
    expect(instance).toHaveProperty('message', 'Internal Server Error')
  })

  it('should have a property of statusCode', () => {
    const instance = new InternalServerError()

    expect(instance).toHaveProperty('statusCode', 500)
  })

  it('should return an array with message object when serializeError method is called', () => {
    const error = 'Something Went Wrong'
    const instance = new InternalServerError(error)

    expect(instance.serializeErrors()).toEqual([{ message: error }])
  })
})
