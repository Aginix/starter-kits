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
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
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
