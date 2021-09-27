import { Express } from 'express'
import { cors, contentType } from '../middleswares'

export default (app: Express): void => {
  app.use(cors)
  app.use(contentType)
}