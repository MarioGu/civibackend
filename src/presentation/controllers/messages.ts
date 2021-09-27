import { Messages } from '../../domain/usecases/messages'

export class MessagesController {
  constructor(
    private readonly messages: Messages
  ) {}

  async handle (): Promise<any> {
    try {
      const messages = await this.messages.get()
      return {
        statusCode: 200,
        body: messages
      }
    } catch {
      return {
        statusCode: 500
      }
    }
  }
}