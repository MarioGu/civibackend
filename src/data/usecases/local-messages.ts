import { MessageModel } from '../../domain/models/message-model'
import { Messages } from '../../domain/usecases/messages'

export class LocalMessages implements Messages {
  async get (): Promise<MessageModel[]> {
    let messages: MessageModel[] = []

    for (let i = 1; i < 20; i++) {      
      let message: MessageModel = {
        id: i,
        timestamp: new Date().getMilliseconds(),
        subject: `Assunto ${i}`,
        detail: `Detalhe ${i}`
      }
      messages.push(message)
    }
    
    return messages
  }
}