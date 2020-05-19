import { CustomError } from './CustomError'

export class NotFoundError extends CustomError {
  statusCode = 404

  constructor(public path: string) {
    super('Route not found')

    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [{ message: 'Not found', field: this.path }]
  }
}
