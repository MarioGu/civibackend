/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeMessagesController } from '../factories/messages'

export default (router: Router): void => {
  router.get('/messages', adaptRoute(makeMessagesController()))
}
