import { MessageModel } from '../models/message-model'

export interface Messages {
  get: () => Promise<MessageModel[]>
}
