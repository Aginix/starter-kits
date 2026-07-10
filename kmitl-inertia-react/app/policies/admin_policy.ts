import type User from '#models/user'
import { BasePolicy } from '@adonisjs/bouncer'
import type { AuthorizerResponse } from '@adonisjs/bouncer/types'

/**
 * Gates the admin panel and the user-management API. Both actions currently
 * require the `admin` role — extend with finer-grained checks as needed.
 */
export default class AdminPolicy extends BasePolicy {
  /**
   * Access to the admin panel shell (the `/admin` route).
   */
  viewAdmin(user: User): AuthorizerResponse {
    return user.isAdmin
  }

  /**
   * Full CRUD over the users resource (`/api/users`).
   */
  manageUsers(user: User): AuthorizerResponse {
    return user.isAdmin
  }
}
