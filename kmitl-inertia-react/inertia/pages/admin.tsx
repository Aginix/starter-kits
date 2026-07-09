import type { ReactNode } from 'react'
import { AdminApp } from '~/admin/admin_app'

export default function AdminPage() {
  return <AdminApp />
}

AdminPage.layout = (page: ReactNode) => <>{page}</>
