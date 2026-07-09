/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'oidc.redirect': {
    methods: ["GET","HEAD"],
    pattern: '/auth/kmitl/redirect',
    tokens: [{"old":"/auth/kmitl/redirect","type":0,"val":"auth","end":""},{"old":"/auth/kmitl/redirect","type":0,"val":"kmitl","end":""},{"old":"/auth/kmitl/redirect","type":0,"val":"redirect","end":""}],
    types: placeholder as Registry['oidc.redirect']['types'],
  },
  'oidc.callback': {
    methods: ["GET","HEAD"],
    pattern: '/auth/kmitl/callback',
    tokens: [{"old":"/auth/kmitl/callback","type":0,"val":"auth","end":""},{"old":"/auth/kmitl/callback","type":0,"val":"kmitl","end":""},{"old":"/auth/kmitl/callback","type":0,"val":"callback","end":""}],
    types: placeholder as Registry['oidc.callback']['types'],
  },
  'admin': {
    methods: ["HEAD","OPTIONS","GET","POST","PUT","PATCH","DELETE"],
    pattern: '/admin',
    tokens: [{"old":"/admin","type":0,"val":"admin","end":""}],
    types: placeholder as Registry['admin']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
  },
  'api..users.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/users',
    tokens: [{"old":"/api/users","type":0,"val":"api","end":""},{"old":"/api/users","type":0,"val":"users","end":""}],
    types: placeholder as Registry['api..users.index']['types'],
  },
  'api..users.store': {
    methods: ["POST"],
    pattern: '/api/users',
    tokens: [{"old":"/api/users","type":0,"val":"api","end":""},{"old":"/api/users","type":0,"val":"users","end":""}],
    types: placeholder as Registry['api..users.store']['types'],
  },
  'api..users.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/users/:id',
    tokens: [{"old":"/api/users/:id","type":0,"val":"api","end":""},{"old":"/api/users/:id","type":0,"val":"users","end":""},{"old":"/api/users/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['api..users.show']['types'],
  },
  'api..users.update': {
    methods: ["PUT","PATCH"],
    pattern: '/api/users/:id',
    tokens: [{"old":"/api/users/:id","type":0,"val":"api","end":""},{"old":"/api/users/:id","type":0,"val":"users","end":""},{"old":"/api/users/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['api..users.update']['types'],
  },
  'api..users.destroy': {
    methods: ["DELETE"],
    pattern: '/api/users/:id',
    tokens: [{"old":"/api/users/:id","type":0,"val":"api","end":""},{"old":"/api/users/:id","type":0,"val":"users","end":""},{"old":"/api/users/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['api..users.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
