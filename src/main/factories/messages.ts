import { LocalMessages } from '../../data/usecases/local-messages'
import { MessagesController } from '../../presentation/controllers/messages'

export const makeMessagesController = (): MessagesController => {
  const localMessages = new LocalMessages()
  const messagesController = new MessagesController(localMessages)
  return messagesController
}