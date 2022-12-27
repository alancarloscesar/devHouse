
//metodos: index, show, update, store, destroy
/*
index: listagem de sessoes
store: Criar uma sessao
show: Quando queremos listar uma UNICA sessao
update: quando queremos alterar alguma sessao
destroy: quando queremos deletar uma sessao
*/

import User from '../models/User';

class SessionController {

  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    if (user === "") {
      return res.status(400).json({
        message: "Preencha o campo user!"
      })
    }

    return res.json(user);
  }

}

export default new SessionController();