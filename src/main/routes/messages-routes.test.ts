import request from 'supertest'
import app from '../config/app'

describe('Post /messages', () => {
  test('Should return 200 on messages', async () => {
    await request(app)
      .post('/messages')
      .send({start: 1})
      .expect(200)
  })
})