import { PostgRESTModelFilter } from '@aginix/adonis-vulcan'
import type { ModelQueryBuilderContract } from '@adonisjs/lucid/types/model'
import type User from '#models/user'

export default class UserFilter extends PostgRESTModelFilter {
  declare $query: ModelQueryBuilderContract<typeof User>

  // Add custom filter methods here. Each public method becomes a query
  // parameter — defining `q(value)` enables `?q=search` in URLs.
}
