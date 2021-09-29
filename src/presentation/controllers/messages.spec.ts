import { Messages } from '../../domain/usecases/messages'
import { HttpRequest } from '../protocols/http'
import { MessagesController } from './messages'

const makeMessages = (): Messages => {
  class MessagesStub {
    async post (start: number): Promise<any> {
      return {
        messages: []
      }
    }
  }
  return new MessagesStub()
}

interface SutTypes {
  sut: MessagesController
  messagesStub: Messages
}

const makesut = (): SutTypes => {
  const messagesStub = makeMessages()
  const sut =  new MessagesController(messagesStub)
  return {
    sut,
    messagesStub
  }
}

const makeFakeRequest = (): HttpRequest => ({
  body: {
    start: 1
  }
})

describe('Messages Controller', () => {
  test('Should call authentication with correct values', async () => {
    const { sut, messagesStub } = makesut()
    const messagesSpy = jest.spyOn(messagesStub, 'post')
    await sut.handle(makeFakeRequest())
    expect(messagesSpy).toHaveBeenCalledWith(1)
  })

  test('Should return 500 if Messages throws', async () => {
    const { sut, messagesStub } = makesut()
    jest.spyOn(messagesStub, 'post').mockImplementationOnce(() => {
      throw new Error()
    })
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual({
      statusCode: 500,
      body: 'Server error.'
    })
  })

  test('Should return 200 on success', async () => {
    const { sut } = makesut()
    const httpResponse = await sut.handle(makeFakeRequest())
    expect(httpResponse).toEqual({
      statusCode: 200,
      body: {
        messages: []
      }
    })
  })
})
