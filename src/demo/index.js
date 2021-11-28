import express from 'express'
import { body } from 'express-validator'

import { connectMongoDb } from '~/database'
import { errorHandler, notFound, requestValidator } from '~/middlewares'
import { setupCloseOnExit } from '~/utils'

const app = express()

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
const mongoUri = 'mongodb://localhost:27017/dbName'
const verbose = true

connectMongoDb({ mongoOptions, mongoUri, verbose })

app.use(express.json())

const emailField = [
  body('email').exists().withMessage('Email field is required'),
  body('email')
    .notEmpty()
    .withMessage('Email must not be empty')
    .bail()
    .isEmail()
    .withMessage('Email must be a valid email')
    .optional()
    .normalizeEmail()
]

app.post('/api/users', requestValidator(emailField), async (req, res) => {
  const { email } = req.body

  res.status(201).json({ message: `User created with email: ${email}` })
})

app.all('*', notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

const server = app.listen(port, '0.0.0.0', () =>
  console.info(`Server is listening on http://localhost:${port}`)
)

setupCloseOnExit(server)
