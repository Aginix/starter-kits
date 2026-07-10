import type { AuthProvider } from 'react-admin'
import { router } from '@inertiajs/react'
import type { InertiaProps } from '~/types'

export const getAuthProvider = (user: InertiaProps['user']): AuthProvider => ({
  login: () => Promise.resolve(),
  checkAuth: async () => {
    return Promise.resolve()
  },
  checkError: async (error) => {
    const status = error.status
    if (status === 401 || status === 403) {
      window.location.href = `/login`
    }
  },
  logout: async () => {
    router.post('/logout')
  },
  getIdentity: async () => {
    return Promise.resolve({
      id: user!.id,
      fullName: user!.fullName || 'Unnamed',
    })
  },
  getPermissions: (_) => {
    return Promise.resolve({})
  },
})
