import jwt from 'jsonwebtoken'
import _ from 'lodash'

export default {
  /* **
  * Função responsável pela geração do token.
  *
  * A geração do token é dada através da chave secreta e do id do usuario
  *
  * @param {*} user
  */
  generateToken: (user) => {
    if (!_.isUndefined(user.id) && !_.isNull(user.id)) {
      return jwt.sign({ user }, process.env.SECRET_KEY_TOKEN, {
        expiresIn: 86400
      })
    }
    return false
  }
}
