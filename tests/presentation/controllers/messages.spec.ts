import { Messages } from '../../../src/domain/usecases/messages'
import { MessagesController } from '../../../src/presentation/controllers/messages'

const makeMessages = (): Messages => {
  class MessagesStub {
    async get (): Promise<any> {
      return []
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

describe('Messages Controller', () => {
  test('Should return 500 if Messages throws', async () => {
    const { sut, messagesStub } = makesut()
    jest.spyOn(messagesStub, 'get').mockImplementationOnce(() => {
      throw new Error()
    })
    const httpResponse = await sut.handle()
    console.log(httpResponse)
    expect(httpResponse).toEqual({
      statusCode: 500
    })
  })
})
