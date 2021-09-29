import { Messages } from '../../domain/usecases/messages'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class MessagesController {
  constructor(
    private readonly messages: Messages
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {start} = httpRequest.body;
      const messages = await this.messages.post(start)
      const httpResponse = (): HttpResponse => ({
        statusCode: 200,
        body: messages
      })
      return httpResponse()
    } catch {
      const httpResponse = (): HttpResponse => ({
        statusCode: 500,
        body: 'Server error.'
      })
      return httpResponse()
    }
  }
}