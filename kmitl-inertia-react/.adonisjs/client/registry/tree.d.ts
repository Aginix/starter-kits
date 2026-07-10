/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
  oidc: {
    redirect: typeof routes['oidc.redirect']
    callback: typeof routes['oidc.callback']
  }
  admin: typeof routes['admin'] & {
    spa: typeof routes['admin.spa']
  }
  api: {
    users: {
      index: typeof routes['api.users.index']
      store: typeof routes['api.users.store']
      show: typeof routes['api.users.show']
      update: typeof routes['api.users.update']
      destroy: typeof routes['api.users.destroy']
    }
  }
}
