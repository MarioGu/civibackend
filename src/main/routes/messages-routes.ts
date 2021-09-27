/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/messages', (req, res) => {
    res.json({ ok: 'ok' })
  })
}
