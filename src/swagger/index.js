import pjson from '../../package.json'
import * as UserSwagger from '../../src/modules/user/swagger'
import * as LoginSwagger from '../../src/modules/login/swagger'
import * as ItemSwagger from '../../src/modules/item/swagger'
import * as DeviceSwagger from '../../src/modules/device/swagger'
import * as MapNavigationSwagger from '../../src/modules/map-navigation/swagger'

module.exports = {
  swagger: '2.0',
  info: {
    description: 'API da aplicação da Advansat para teste de inspenção de interface gráfica de set-top-box.',
    version: pjson.version,
    title: 'API Advansat'
  },
  host: `${process.env.API_HOST}:${process.env.API_PORT}`,
  basePath: '/api/v1',
  tags: [
    LoginSwagger.tag,
    UserSwagger.tag,
    ItemSwagger.tag,
    DeviceSwagger.tag,
    MapNavigationSwagger.tag
  ],
  schemes: [
    'http'
  ],
  paths: {
    '/login': LoginSwagger.routeRoot,
    '/user': UserSwagger.routeRoot,
    '/user/{id}': UserSwagger.routeByIDUser,
    '/item': ItemSwagger.routeRoot,
    '/item/{id}': ItemSwagger.routeByIDItem,
    '/device': DeviceSwagger.routeRoot,
    '/device/{id}': DeviceSwagger.routeByIDDevice,
    '/map-navigation': MapNavigationSwagger.routeRoot,
    '/map-navigation/{id}': MapNavigationSwagger.routeByIDMapNavigation

  },
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  },
  security: [
    {
      Bearer: []
    }
  ],
  definitions: {
    Login: LoginSwagger.Login,
    LoginReturned: LoginSwagger.LoginReturned,
    User: UserSwagger.User,
    NewUser: UserSwagger.NewUser,
    UpdateUser: UserSwagger.UpdateUser,
    Item: ItemSwagger.Item,
    NewItem: ItemSwagger.NewItem,
    UpdateItem: ItemSwagger.UpdateItem,
    Device: DeviceSwagger.Device,
    NewDevice: DeviceSwagger.NewDevice,
    UpdateDevice: DeviceSwagger.UpdateDevice,
    MapNavigation: MapNavigationSwagger.MapNavigation,
    NewMapNavigation: MapNavigationSwagger.NewMapNavigation,
    UpdateMapNavigation: MapNavigationSwagger.UpdateMapNavigation
  }
}
