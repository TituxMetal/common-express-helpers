import createHttpError from 'http-errors'

const notFound = (req, _res, next) =>
  next(createHttpError(404, { reason: `${req.path} does not exists` }))

export default notFound
