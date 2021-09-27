import { Express } from 'express'
import { cors } from '../middleswares/cors'

export default (app: Express): void => {
  app.use(cors)
}