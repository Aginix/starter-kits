import User from '#models/user'
import AdminPolicy from '#policies/admin_policy'
import { createUserValidator, updateUserValidator } from '#validators/user'
import { BaseResourceController } from '@aginix/adonis-vulcan'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController extends BaseResourceController<typeof User> {
  protected model = User

  /**
   * Every action requires the `manageUsers` ability. Guarding before the
   * record is loaded is enough here since the policy is not row-specific.
   */
  private async authorizeRequest(ctx: HttpContext) {
    await ctx.bouncer.with(AdminPolicy).authorize('manageUsers')
  }

  async index(ctx: HttpContext) {
    await this.authorizeRequest(ctx)
    return super.index(ctx)
  }

  async show(ctx: HttpContext) {
    await this.authorizeRequest(ctx)
    return super.show(ctx)
  }

  async store(ctx: HttpContext) {
    await this.authorizeRequest(ctx)
    return super.store(ctx)
  }

  async update(ctx: HttpContext) {
    await this.authorizeRequest(ctx)
    return super.update(ctx)
  }

  async destroy(ctx: HttpContext) {
    await this.authorizeRequest(ctx)
    return super.destroy(ctx)
  }

  /**
   * The update validator needs the current row id (to exclude it from the
   * email-uniqueness check), so we pass it through as validator metadata.
   */
  protected async validateInput(ctx: HttpContext, action: 'store' | 'update') {
    if (action === 'update') {
      return ctx.request.validateUsing(updateUserValidator, {
        meta: { userId: Number(ctx.request.param('id')) },
      })
    }
    return ctx.request.validateUsing(createUserValidator)
  }
}
