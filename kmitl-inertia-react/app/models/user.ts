import { UserSchema } from '#database/schema'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { Filterable } from '@aginix/adonis-vulcan'
import UserFilter from './filters/user_filter.js'

export default class User extends compose(UserSchema, withAuthFinder(hash), Filterable) {
  static $filter = () => UserFilter

  /**
   * Whether the user may access the admin panel and the user-management API.
   * Backed by the `role` column (see the users migration / generated schema).
   */
  get isAdmin() {
    return this.role === 'admin'
  }

  get initials() {
    const [first, last] = this.fullName ? this.fullName.split(' ') : this.email.split('@')
    if (first && last) {
      return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase()
    }
    return `${first.slice(0, 2)}`.toUpperCase()
  }
}
