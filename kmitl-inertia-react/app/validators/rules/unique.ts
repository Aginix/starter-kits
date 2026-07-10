import vine from '@vinejs/vine'
import db from '@adonisjs/lucid/services/db'
import type { FieldContext } from '@vinejs/vine/types'

type UniqueOptions = {
  /** Table to search. */
  table: string
  /** Column that must be unique. */
  column: string
  /**
   * Name of the validator metadata key holding a row id to exclude — use it on
   * updates so a record does not clash with itself (e.g. `exceptMeta: 'userId'`).
   */
  exceptMeta?: string
}

/**
 * Database uniqueness rule. VineJS ships no built-in `unique`, so we implement
 * the AdonisJS-recommended pattern with `vine.createRule`.
 */
export const uniqueRule = vine.createRule(
  async (value: unknown, options: UniqueOptions, field: FieldContext) => {
    if (typeof value !== 'string') return

    const query = db.from(options.table).select(options.column).where(options.column, value)

    const exceptId = options.exceptMeta ? field.meta?.[options.exceptMeta] : undefined
    if (exceptId !== undefined && exceptId !== null) {
      query.whereNot('id', exceptId)
    }

    const row = await query.first()
    if (row) {
      field.report('The {{ field }} has already been taken', 'database.unique', field)
    }
  }
)
