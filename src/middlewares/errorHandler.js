import { getErrorDetails } from '~/utils'

const errorHandler = (error, req, res, next) => {
  if (req.headersSent) {
    return next(error)
  }

  const errorDetails = getErrorDetails(error)

  if (error.code === 11000) {
    Object.assign(errorDetails, {
      status: 400,
      type: 'Duplicate Field Error',
      reason: 'One or more fields have value that already exists.',
      fields: Object.keys(error.keyValue)
    })
  }

  if (!errorDetails.status) {
    errorDetails.status = error.statusCode || 500
  }

  res.set('Content-Type', 'application/problem+json')

  res.status(errorDetails.status).json(errorDetails)

  return next()
}

export default errorHandler
