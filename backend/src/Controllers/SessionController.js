const connection = require('../Database/connection')


module.exports = {
  async create(req, res) {
    const {id} = req.body

    const ong = await connection('ongs')
    .where('id', id)
    .select('name')
    .first()

    if(!ong){
      return res.status(400).json({error: "ONG com id citado não encontrada"})
    }

    return res.json(ong)
  }
}