/* eslint-disable */
import logger from '../src/utils/logger'
import * as Constants from './Constants'

import testLogin from './login.spec'
import testUser from './user.spec'
import testItem from './item.spec'
import testDevice from './device.spec'
import testMapNavigation from './mapNavigation.spec'

logger.transports.console.silent = true

describe('Exec Unit tests', () => {
  testLogin()
  testUser()
  testItem()
  testDevice()
  testMapNavigation()
})
