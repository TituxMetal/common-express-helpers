import { ValidationError } from 'express-validator'

import { RequestValidationError } from './RequestValidationError'

describe('RequestValidationError', () => {
  const errors: ValidationError[] = [
    { msg: 'Name is required', param: 'name', location: 'body', value: ''},
    { msg: 'Email is required', param: 'email', location: 'body', value: ''}
  ]
  const instance = new RequestValidationError(errors)

  it('should be an instance of RequestValidationError', () => {
    expect(instance).toBeInstanceOf(RequestValidationError)
  })

  it('should have a property of message', () => {
    expect(instance).toHaveProperty('message')
  })

  it('should have a property of statusCode', () => {
    expect(instance).toHaveProperty('statusCode', 422)
  })

  it('should return an array with message object when serializeError method is called', () => {
    expect(instance.serializeErrors()).toEqual([
      { message: errors[0].msg, field: errors[0].param },
      { message: errors[1].msg, field: errors[1].param }
    ])
  })
})
