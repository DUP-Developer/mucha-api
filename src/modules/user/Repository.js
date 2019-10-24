import User from './Model'
import { Utils } from '../../utils'
import UserValidation from './Validation'
import utils from '../../utils/utils'
import _ from 'lodash'
import { PASSWORD_DEFAULT } from '../../utils/constants'

export default {
  async create (data) {
    // validações
    await UserValidation.isEmailValid(data.email)
    await UserValidation.isUserNameValid(data.name)
    await UserValidation.existsUser(data.name, data.password)
    await UserValidation.userNameExist(data.name)
    await UserValidation.userPhoneExist(data.phone)
    await UserValidation.userEmailExist(data.email)

    // modificação de dados
    data.active = true
    data.newUser = true
    data.password = utils.getPasswordEncrypted(PASSWORD_DEFAULT)

    // criando o user
    return {
      data: await User.create(data)
    }
  },

  async updatePassword (id, data) {
    // validações
    await UserValidation.passwordValid(data.newPassword)
    await UserValidation.passwordValid(data.oldPassword)
    await UserValidation.passwordNewEqOld(data.newPassword, data.oldPassword)
    await UserValidation.passwordConfirmValid(data.newPassword, data.confirmPassword)
    // modificação de dados
    data.newPassword = Utils.getPasswordEncrypted(data.newPassword)
    data.oldPassword = Utils.getPasswordEncrypted(data.oldPassword)
    data.newUser = false

    const user = await User.find({ password: data.oldPassword })
    if (_.isEmpty(user)) {
      throw 'login.error.notLoggedIn' // eslint-disable-line
    }

    // criando o user
    return {
      data: await User.updateOne({ _id: id }, { 
        password: data.newPassword,
        newUser: false
       })
    }
  },

  /**
   * find all users
   */
  async all () {
    return {
      data: await User.find({}).sort([['_id', 'descending']])
    }
  },

  /**
   * Fazendo busca por id
   */
  async findById (id) {
    return {
      data: await User.findById(id)
    }
  },

  /**
   * atualizando com base no id
   * @param {Int} id
   * @param {Object} data
   */
  async update (id, data) {
    // validações
    await UserValidation.isEmailValid(data.email)
    await UserValidation.isUserNameValid(data.name)

    // Verificação se houve mudanças no nome do usuário
    const user = await User.findById(id)
    if (!_.isEqual(user.email, data.email)) {
      await UserValidation.userEmailExist(data.email)
    }

    if (!_.isEqual(user.name, data.name)) {
      await UserValidation.userNameExist(data.name)
    }

    if (!_.isEqual(user.phone, data.phone)) {
      await UserValidation.userPhoneExist(data.phone)
    }

    return {
      data: await User.updateOne({ _id: id }, data)
    }
  },

  /**
   * Deletando por id
   * @param {Int} id
   */
  async delete (id) {
    // validations
    await UserValidation.existsOnlyOneAdminUser(id)

    return {
      data: await User.updateOne({ _id: id }, { active: false })
    }
  },

  /**
   * find all users without user logged
   */
  async allWithoutUserLogged (userId) {
    return {
      data: await User.find({ _id : {$not: { $eq: userId }} }).sort([['_id', 'descending']])
    }
  },

  async resetPassword (id) {
    return {
      data: await User.updateOne({ _id: id }, {
        password: Utils.getPasswordEncrypted(PASSWORD_DEFAULT),
        newUser: true
      })
    }
  }
}
