import { useEffect } from 'react'
import { useNotify, useTranslate } from 'react-admin'

interface QueryLike {
  error: unknown
}

export function useNotifyOnError(query: QueryLike, fallbackKey = 'ra.notification.http_error') {
  const notify = useNotify()
  const translate = useTranslate()

  useEffect(() => {
    if (!query.error) return
    const msg = (query.error as Error).message || translate(fallbackKey)
    notify(msg, { type: 'error' })
  }, [query.error, fallbackKey, notify, translate])
}
