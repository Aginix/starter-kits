import User from '#models/user'
import Admin from '#models/admin'
import { BasePolicy } from '@adonisjs/bouncer'
import type { AuthorizerResponse } from '@adonisjs/bouncer/types'

export default class AdminPolicy extends BasePolicy {
  
}