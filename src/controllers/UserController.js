const User = require('../models/User')

module.exports = {
  async store(req, res){
    const { name, email} = req.body

    const user = await User.create({name, email})

    return res.json(user);
  },

  async index(req, res) {
    const users = await User.findAll()

    return res.json(users)
  },

  async update(req, res){
    const { id } = req.params;

    await User.update(req.body, {
      where: { id }
    })

    const user = await User.findByPk(id)

    return res.json(user)
  },

  async destroy(req, res){
    const {id} = req.params

    await User.destroy({ where: { id } })

    return res.send(`Usuário ${id} removido com sucesso`)

  }
}