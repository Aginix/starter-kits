import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

/**
 * Seeds two local accounts for development. Passwords are hashed automatically
 * by the model's auth finder mixin. These users log in via the email/password
 * form; KMITL SSO users are provisioned on first sign-in instead.
 */
export default class extends BaseSeeder {
  async run() {
    await User.updateOrCreateMany('email', [
      {
        email: 'admin@kmitl.ac.th',
        fullName: 'KMITL Admin',
        password: 'password',
        role: 'admin',
      },
      {
        email: 'demo@kmitl.ac.th',
        fullName: 'Demo User',
        password: 'password',
        role: 'user',
      },
    ])
  }
}
