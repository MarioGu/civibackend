import { Messages } from '../../domain/usecases/messages'

export class MessagesController {
  constructor(
    private readonly messages: Messages
  ) {}

  async handle (): Promise<any> {
    try {
      await this.messages.get()
    } catch {
      return {
        statusCode: 500
      }
    }
  }
}