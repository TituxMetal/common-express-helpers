import httpError from 'http-errors'
import mongoose from 'mongoose'

const connectMongoDb = async ({ mongoOptions, mongoUri, verbose }) => {
  try {
    await mongoose.connect(mongoUri, mongoOptions)

    console.info(`
      Database Connected!
      ${verbose && mongoUri}
    `)
  } catch (error) {
    console.error(httpError(500, error, { reason: `connectMongoDb: ${error.message}` }))
  }
}

export default connectMongoDb
