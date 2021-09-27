import { Express } from 'express'
import { cors } from '../middleswares/cors'
import { contentType } from '../middleswares/content-type'

export default (app: Express): void => {
  app.use(cors)
  app.use(contentType)
}