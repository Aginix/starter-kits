import { SharedProps } from '@adonisjs/inertia/types'
import { usePage } from '@inertiajs/react'

export default function useProps(): SharedProps {
  return usePage<SharedProps>().props
}
