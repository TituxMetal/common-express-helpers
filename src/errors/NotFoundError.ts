import { CustomError } from './CustomError'

export class NotFoundError extends CustomError {
  statusCode = 404

  constructor(public path: string, public message: string = 'Not Found') {
    super(message)

    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message, field: this.path }]
  }
}
