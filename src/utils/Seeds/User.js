import UserRepository from '../../modules/user/Repository'
import { USER_TYPES } from '../constants'

export default async () => {
  // add the users default
  await UserRepository.create({
    name: 'Admin',
    email: 'admin@advansat.com',
    password: '1234567',
    phone: '(83) 99845 1245',
    userType: USER_TYPES.ADMIN
  })
}
