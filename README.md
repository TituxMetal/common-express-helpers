# Common Express Helpers

Reusable helpers and middlewares for express server projects.

## Connect Mongo Db

Helper function to connect to a Mongo Db database using Mongoose.

### Parameters

Object of parameters to pass to the function

- **mongoOptions** _Type: Object - Options to pass to Mongoose_

- **mongoUri** _Type: String - Mongo Db uri to connect_

- **verbose** _Type: Boolean - Print the Mongo Db Uri in the console, **do not use this in
  production**_

### Usage

```js
import { connectMongoDb } from '@lgdweb/common-express-helpers'

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
const mongoUri = 'mongodb://localhost:27017/dbName'
const verbose = process.env.NODE_ENVIRONMENT === 'development'

connectMongoDb({ mongoOptions, mongoUri, verbose })
```

## Setup Close On Exit

Helper function that closes properly an Express server.

### Parameters

An instance of Express.

### Usage

```js
import { setupCloseOnExit } from '@lgdweb/common-express-helpers'
import express from 'express'

const app = express()
const port = process.env.PORT || 5000

const server = app.listen(port, '0.0.0.0', () =>
  console.info(`Server is listening on http://localhost:${port}`)
)

setupCloseOnExit(server)
```

## Get Details For Error

Helper function that returns formated http error details based on some error types and using
http-errors package.

### Parameters

A standard Error object.

### Usage

This helper function is used internally in the errorHandler middleware

## Error Handler Middleware

Middleware for handling errors from Express app that returns a formated error with some details base
on the error type.

### Parameters

Standard parameters for Express middlewares:

- **error** _Type: Error - Standard Error or HttpError instance for nice formated error details_
- **req** _Type: Request - The request object from Express_
- **res** _Type: Response - The Response object from Express_
- **next** _Type: Next - The Next object from Express_

### Usage

```js
import { errorHandler } from '@lgdweb/common-express-helpers'
import express from 'express'

const app = express()

app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, '0.0.0.0', () =>
    console.info(`Server is listening on http://localhost:${port}`)
```
