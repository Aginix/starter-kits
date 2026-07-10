/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home', {}).as('home')

router
  .group(() => {
    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])

    // OIDC (KMITL SSO) login flow
    router.get('auth/kmitl/redirect', [controllers.Oidc, 'redirect']).as('oidc.redirect')
    router.get('auth/kmitl/callback', [controllers.Oidc, 'callback']).as('oidc.callback')
  })
  .use(middleware.guest())

router
  .group(() => {
    // The admin panel is a react-admin SPA mounted at /admin. Match both the
    // base path and every client-side sub-route (e.g. /admin/users/create) so
    // deep links and page refreshes resolve to the same Inertia page.
    router.any('admin', [controllers.Admin, 'handle']).as('admin')
    router.any('admin/*', [controllers.Admin, 'handle']).as('admin.spa')
    router.post('logout', [controllers.Session, 'destroy'])

    router
      .group(() => {
        router.resource('users', controllers.apis.Users).apiOnly()
      })
      .prefix('api')
      .as('api')
  })
  .use(middleware.auth())
