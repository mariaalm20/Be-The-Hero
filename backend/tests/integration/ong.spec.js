const request = require('supertest')
const app = require('../../src/app')
const connection = require ('../../src/Database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should bem to create a new ONG', async () => {
    const response = await  request(app)
    .post('/ongs')
    .send({
      name : "MARIA'S",
	    email : "maria@maria.com",
	    whatsapp : "44000000000",
	    city : "Maringá",
	    uf : "PR"	
    })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})