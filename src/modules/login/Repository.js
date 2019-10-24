import User from '../user/Model'
import LoginValidations from './Validation'
import _ from 'lodash'
import {
  Auth,
  Utils
} from '../../utils'

export default {
  async loginSystem (email, password) {
    await LoginValidations.passwordValid(password)

    password = await Utils.getPasswordEncrypted(password)
    const user = await User.findOne({ email, password }, 'name phone email active password userType newUser')

    if (_.isEmpty(user)) {
      throw 'login.error.notLoggedIn' // eslint-disable-line
    }

    if (!user.active) {
      throw 'login.error.userDisabled' // eslint-disable-line
    }

    return {
      token: Auth.generateToken(user),
      data: user
    }
  }
}
