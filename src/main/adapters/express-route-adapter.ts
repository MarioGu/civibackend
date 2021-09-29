import { Request, Response } from 'express'
import { MessagesController } from '../../presentation/controllers/messages'
import { HttpRequest } from '../../presentation/protocols/http'

export const adaptRoute = (controller: MessagesController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode === 200) {
      res.status(httpResponse.statusCode).send(httpResponse.body)
    } else {
      res.status(httpResponse.statusCode).json({
        error: "Server error"
      })
    }
  }
}
