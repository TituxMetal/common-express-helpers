import { CustomError } from './CustomError'

export class BadRequestError extends CustomError {
  statusCode = 400

  constructor(public message: string = 'Bad Request Error') {
    super(message)

    Object.setPrototypeOf(this, BadRequestError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}
