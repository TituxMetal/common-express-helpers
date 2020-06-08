import { BadRequestError } from './BadRequestError'

describe('BadRequestError', () => {
  it('should be an instance of BadRequestError', () => {
    const instance = new BadRequestError()
    
    expect(instance).toBeInstanceOf(BadRequestError)
  })

  it('should have a property of message', () => {
    const instance = new BadRequestError()

    expect(instance).toHaveProperty('message', 'Bad Request Error')
  })

  it('should have a property of statusCode', () => {
    const instance = new BadRequestError()

    expect(instance).toHaveProperty('statusCode', 400)
  })

  it('should return an array with message object when serializeError method is called', () => {
    const message = 'Error message'
    const instance = new BadRequestError(message)
    
    expect(instance.serializeErrors()).toEqual([{ message }])
  })
})
