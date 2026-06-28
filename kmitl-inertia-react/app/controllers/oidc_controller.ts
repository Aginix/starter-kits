import { randomUUID } from 'node:crypto'

import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class OidcController {
  /**
   * Start the OIDC authorization-code flow — redirect the browser to KMITL SSO.
   */
  async redirect({ ally }: HttpContext) {
    return ally.use('kmitl').redirect()
  }

  /**
   * Handle the KMITL callback: the driver verifies the id_token, we upsert a
   * local user, log them in, and stash the raw id_token for RP-initiated logout.
   */
  async callback({ ally, auth, session, response }: HttpContext) {
    const kmitl = ally.use('kmitl')

    if (kmitl.accessDenied()) {
      session.flash('error', 'You cancelled the KMITL login')
      return response.redirect().toRoute('session.create')
    }
    if (kmitl.stateMisMatch()) {
      session.flash('error', 'Login request expired, please try again')
      return response.redirect().toRoute('session.create')
    }
    if (kmitl.hasError()) {
      session.flash('error', kmitl.getError() || 'KMITL login failed')
      return response.redirect().toRoute('session.create')
    }

    const oidcUser = await kmitl.user()
    if (!oidcUser.email) {
      session.flash('error', 'KMITL did not return an email address')
      return response.redirect().toRoute('session.create')
    }

    /**
     * The demo links accounts by verified email. A production app would usually
     * persist the stable `oidcUser.id` (the id_token "sub") in its own column,
     * since an email can change. `password` is set to a random value because
     * the column is NOT NULL — these users authenticate via KMITL, not it.
     */
    const user = await User.firstOrCreate(
      { email: oidcUser.email },
      { fullName: oidcUser.name || oidcUser.nickName, password: randomUUID() }
    )

    await auth.use('web').login(user)
    session.put('oidc_id_token', oidcUser.token.idToken)

    session.flash('success', `Signed in as ${user.email} via KMITL`)
    return response.redirect().toRoute('home')
  }
}
