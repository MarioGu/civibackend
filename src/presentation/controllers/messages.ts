import { Messages } from '../../domain/usecases/messages'

export class MessagesController {
  constructor(
    private readonly messages: Messages
  ) {}

  async handle (): Promise<any> {
    try {
      const httpResponse = await this.messages.get()
      return {
        statusCode: 200
      }
    } catch {
      return {
        statusCode: 500
      }
    }
  }
}