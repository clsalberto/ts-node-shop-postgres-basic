import 'dotenv/config'
import 'express-async-errors'
import cors from 'cors'
import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response
} from 'express'
import helmet from 'helmet'

import routes from '../routes'

class App {
  server: express.Application

  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
    this.exceptionHandler()
  }

  middlewares(): void {
    this.server.use(cors({ origin: process.env.FRONT_URL }))
    this.server.use(helmet())
    this.server.use(express.json())
  }

  routes(): void {
    this.server.use(routes)
  }

  exceptionHandler(): void {
    this.server.use(
      async (
        error: ErrorRequestHandler,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        if (process.env.NODE_ENV === 'development') {
          return response.status(500).json(error)
        }

        return response.status(500).json({ error: 'Internal server error' })
      }
    )
  }
}

export default new App().server
