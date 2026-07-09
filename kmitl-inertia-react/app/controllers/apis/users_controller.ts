import User from '#models/user'
import { BaseResourceController } from '@aginix/adonis-vulcan'

export default class UsersController extends BaseResourceController<typeof User> {
  protected model = User
}
