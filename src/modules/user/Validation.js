import _ from 'lodash'
import validations from '../../utils/validations'
import { USER_TYPES } from '../../utils/constants'
import model from './Model'
import ValidationException from '../../exceptions/ValidationException'
import Messages from '../../utils/Messages'
/**
 * @class SectorValidation
 * Class responsible for carrying out validations for the sector
 */
export default {
  /**
   * Validando se o usuario já existe
   */
  async existsUser (name, email) {
    // todo - ir ao banco vê se eexiste mesmo o usuario com esse id

    const data = await model.find({ name, email: { $gte: email } }).exec()
    if (data.length > 0) {
      throw new ValidationException(Messages.user.errors.userExist)
    }
  },

  /**
   * valida se é um email valido
   * @param {String} email
   */
  isEmailValid (email) {
    // todo - deve ir no banco para poder saber se já existe algum email
    if (!validations.isEmailValid(email)) {
      throw new ValidationException(Messages.user.errors.emailInvalid)
    }
  },

  /**
   * Validando se a senha é uma senha valida
   * @param {String} password
   */
  passwordValid (password) {
    if (_.isEmpty(password) && !validations.isPasswordValid(password)) {
      throw new ValidationException(Messages.user.errors.passwordInvalid)
    }
  },

  /**
   * Validando se a senha é uma senha valida
   * @param {String} password
   */
  passwordLengthValid (password) {
    if (_.isEmpty(password) && !validations.isPasswordLengthValid(password)) {
      throw new ValidationException(Messages.user.errors.passwordInvalid)
    }
  },

  /**
   * validando se o nome é um nome valido
   * @param {String} name
   */
  isUserNameValid (name) {
    if (!validations.isNameValid(name)) {
      throw new ValidationException(Messages.user.errors.nameInvalid)
    }
  },

  /**
   * validando se o nome é um nome valido
   * @param {String} name
   */
  userTypeValid (userTypeId) {
    // todo - search in db

    if (!validations.isInteger(userTypeId) && validations.isEmpty(userTypeId)) {
      throw new ValidationException(Messages.user.errors.nameInvalid)
    }
  },

  /**
   * validando se o usuario que esta sendo deletado
   * é um do tipo admim, caso seja e mão for o unico admin do
   * sistema ele não pode ser deletado
   * @param {String} name
   */
  async existsOnlyOneAdminUser (id) {
    const user = await model.findById(id)

    if (user.userType === USER_TYPES.ADMIN) {
      const allUsersAdmin = await model.find({
        userType: USER_TYPES.ADMIN,
        active: true
      })

      if (allUsersAdmin.length < 2) {
        throw new ValidationException(
          Messages.user.errors.existsOnlyOneAdminUser
        )
      }
    }
  },

  /**
   * Validando se o nome do usuário já existe
   */
  async userNameExist (name) {
    const data = await model.find({ name }).exec()

    if (data.length > 0) {
      throw new ValidationException(Messages.user.errors.userNameExist)
    }
  },

  /**
   * Validando se o telefone do usuário já existe
   */
  async userPhoneExist (phone) {
    const data = await model.find({ phone }).exec()

    if (data.length > 0) {
      throw new ValidationException(Messages.user.errors.userPhoneExist)
    }
  },

  /**
   * Validando se o email do usuário já existe
   */
  async userEmailExist (email) {
    const data = await model.find({ email }).exec()

    if (data.length > 0) {
      throw new ValidationException(Messages.user.errors.userEmailExist)
    }
  },

  passwordConfirmValid (newPassword, confirmPassword) {
    if (newPassword !== confirmPassword) {
      throw new ValidationException(Messages.user.errors.userConfirmPasswordInvalid)
    }
  },

  passwordNewEqOld (newPassword, oldPassword) {
    if (newPassword === oldPassword) {
      throw new ValidationException(Messages.user.errors.userNewPasswordIvalid)
    }
  }
}
