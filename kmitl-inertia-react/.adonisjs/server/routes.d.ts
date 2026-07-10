import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'oidc.redirect': { paramsTuple?: []; params?: {} }
    'oidc.callback': { paramsTuple?: []; params?: {} }
    'admin': { paramsTuple?: []; params?: {} }
    'admin.spa': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'api.users.index': { paramsTuple?: []; params?: {} }
    'api.users.store': { paramsTuple?: []; params?: {} }
    'api.users.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'api.users.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'api.users.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'oidc.redirect': { paramsTuple?: []; params?: {} }
    'oidc.callback': { paramsTuple?: []; params?: {} }
    'admin': { paramsTuple?: []; params?: {} }
    'admin.spa': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'api.users.index': { paramsTuple?: []; params?: {} }
    'api.users.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'oidc.redirect': { paramsTuple?: []; params?: {} }
    'oidc.callback': { paramsTuple?: []; params?: {} }
    'admin': { paramsTuple?: []; params?: {} }
    'admin.spa': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'api.users.index': { paramsTuple?: []; params?: {} }
    'api.users.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'session.store': { paramsTuple?: []; params?: {} }
    'admin': { paramsTuple?: []; params?: {} }
    'admin.spa': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'api.users.store': { paramsTuple?: []; params?: {} }
  }
  OPTIONS: {
    'admin': { paramsTuple?: []; params?: {} }
    'admin.spa': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
  }
  PUT: {
    'admin': { paramsTuple?: []; params?: {} }
    'admin.spa': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'api.users.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'admin': { paramsTuple?: []; params?: {} }
    'admin.spa': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'api.users.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'admin': { paramsTuple?: []; params?: {} }
    'admin.spa': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'api.users.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}