import Database from '../../../config/database'

const schema = new Database.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  newUser: Boolean,
  userType: String,
  active: {
    type: Boolean,
    default: true
  }
})

export default Database.model('User', schema)
