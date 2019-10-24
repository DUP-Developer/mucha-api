import Express from 'express'
import Context from '../../utils/context'
import Login from './Repository'

const App = Express.Router()

App.route('/')
  .post(async (req, res) => {
    const context = new Context(res)
    const email = req.query.email || req.body.email
    const password = req.query.password || req.body.password

    Login.loginSystem(email, password)
      .then(data => {
        context.success(data, 'login.signIn.success')
      })
      .catch(err => {
        context.error(err, 'login.error.notLoggedIn')
      })
  })

export default App
