import vine from '@vinejs/vine'
import { uniqueRule } from './rules/unique.js'

const roleRule = vine.enum(['admin', 'user'])

/**
 * Validates the body for `POST /api/users`.
 */
export const createUserValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().maxLength(255).nullable().optional(),
    email: vine
      .string()
      .trim()
      .email()
      .maxLength(254)
      .use(uniqueRule({ table: 'users', column: 'email' })),
    password: vine.string().minLength(8).maxLength(512),
    role: roleRule.optional(),
  })
)

/**
 * Validates the body for `PUT/PATCH /api/users/:id`. All fields are optional
 * (partial updates); email uniqueness excludes the current row via metadata.
 */
export const updateUserValidator = vine.withMetaData<{ userId: number }>().compile(
  vine.object({
    fullName: vine.string().trim().maxLength(255).nullable().optional(),
    email: vine
      .string()
      .trim()
      .email()
      .maxLength(254)
      .use(uniqueRule({ table: 'users', column: 'email', exceptMeta: 'userId' }))
      .optional(),
    password: vine.string().minLength(8).maxLength(512).optional(),
    role: roleRule.optional(),
  })
)
