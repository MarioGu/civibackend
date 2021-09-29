import { MessageModel } from '../models/message-model'

export interface Messages {
  post: (start: number) => Promise<MessageModel[]>
}
