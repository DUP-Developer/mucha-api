import Express from 'express'
import { Context } from '../../utils'
import Repository from './Repository'
import Messages from '../../utils/Messages'
import path from 'path'
import jwt from 'jsonwebtoken'

const App = Express.Router()

App.route('/')
  .get(async (req, res) => {
    const context = new Context(res)

    Repository.allWithoutUserLogged(req.user._id)
      .then(data => {
        context.success(data, Messages.user.success.list)
      })
      .catch(err => {
        context.error(err)
      })
  })
  .post((req, res) => {
    const context = new Context(res)

    Repository.create(req.body)
      .then(data => {
        context.success(data, Messages.user.success.create)
      })
      .catch(err => {
        context.error(err.message)
      })
  })

App.route('/create-password/')
  .get((req, res) => {
    const context = new Context(res)

    Repository.findById(req.user._id)
      .then(user => {
        if (user.data) {
          res.sendFile(
            path.join(`${__dirname}../../../views/create-password.html`)
          )
        }
      })
      .catch(err => context.error(err))
  })
  .post(async (req, res) => {
    const context = new Context(res)

    Repository.updatePassword(req.user._id, req.body)
      .then(data => {
        context.success(data)
      })
      .catch(err => {
        context.error(err)
      })
  })

App.route('/:id')
  .get(async (req, res) => {
    const context = new Context(res)

    Repository.findById(req.params.id)
      .then(data => {
        context.success(data)
      })
      .catch(err => {
        context.error(err)
      })
  })
  .put((req, res) => {
    const context = new Context(res)

    Repository.update(req.params.id, req.body)
      .then(data => {
        context.success(data, Messages.user.success.edit)
      })
      .catch(err => {
        context.error(err)
      })
  })
  .delete(async (req, res) => {
    const context = new Context(res)

    Repository.delete(req.params.id)
      .then(data => {
        context.success(data, Messages.user.success.delete)
      })
      .catch(err => {
        context.error(err)
      })
  })

App.route('/reset-password/:id')
  .put(async (req, res) => {
    const context = new Context(res)

    Repository.resetPassword(req.params.id)
      .then(data => {
        context.success(data, Messages.user.success.resetPassword)
      })
      .catch(err => {
        context.error(err)
      })
  })

export default App
