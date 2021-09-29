import { MessageModel } from '../../domain/models/message-model'
import { Messages } from '../../domain/usecases/messages'

export class LocalMessages implements Messages {
  async post (start: number = 0): Promise<MessageModel[]> {

    if (start < 5) {

      let messages: MessageModel[] = []
  
      for (let i = 1; i < 21; i++) {      
        let message: MessageModel = {
          id: (20 * start) + i,
          timestamp: new Date(2020, 5, i + 10, start * i + 5, 0, 0).getTime(),
          subject: `Assunto ${((20 * start) + i)}`,
          detail: `Detalhe ${((20 * start) + i)}`
        }
        messages.push(message)
      }
      
      return messages
    } else {
      return []
    }
  }
}