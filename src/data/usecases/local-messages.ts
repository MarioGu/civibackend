import { MessageModel } from '../../domain/models/message-model'
import { Messages } from '../../domain/usecases/messages'

export class LocalMessages implements Messages {
  async get (): Promise<MessageModel[]> {
    let messages: MessageModel[] = []

    for (let i = 1; i < 21; i++) {      
      let message: MessageModel = {
        id: i,
        timestamp: new Date(2020, 5, i + 10, i + 5, 0, 0).getTime(),
        subject: `Assunto ${i}`,
        detail: `Detalhe ${i}`
      }
      messages.push(message)
    }
    
    return messages
  }
}