import AdminPolicy from '#policies/admin_policy'
import type { HttpContext } from '@adonisjs/core/http'

export default class AdminController {
  public async handle({ inertia, bouncer }: HttpContext) {
    await bouncer.with(AdminPolicy).authorize('viewAdmin')
    return inertia.render('admin', {})
  }
}
