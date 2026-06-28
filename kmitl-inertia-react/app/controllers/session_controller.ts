import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
  async create({ inertia }: HttpContext) {
    return inertia.render('auth/login', {})
  }

  async store({ request, auth, response }: HttpContext) {
    const { email, password } = request.all()
    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)
    response.redirect().toRoute('home')
  }

  async destroy({ auth, response, session, ally }: HttpContext) {
    const idTokenHint = session.get('oidc_id_token') as string | undefined
    await auth.use('web').logout()

    // If this was a kmitl (OIDC) session, end it at the provider too
    // (RP-initiated logout). Otherwise just bounce back to the login page.
    if (idTokenHint) {
      session.forget('oidc_id_token')
      return ally.use('kmitl').logout({ idTokenHint })
    }

    return response.redirect().toRoute('session.create')
  }
}
