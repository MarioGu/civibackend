import { Request, Response } from 'express'
import { MessagesController } from '../../presentation/controllers/messages'

export const adaptRoute = (controller: MessagesController) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle()
    if (httpResponse.statusCode === 200) {
      res.status(httpResponse.statusCode).send(httpResponse.body)
    } else {
      res.status(httpResponse.statusCode).json({
        error: "Server error"
      })
    }
  }
}
