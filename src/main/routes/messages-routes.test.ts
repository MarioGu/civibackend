import request from 'supertest'
import app from '../config/app'

describe('Get /messages', () => {
  test('Should return 200 on messages', async () => {
    await request(app)
      .get('/messages')
      .send()
      .expect(200)
  })
})