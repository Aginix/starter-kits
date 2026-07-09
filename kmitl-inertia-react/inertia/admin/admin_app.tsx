import { Admin, Resource, fetchUtils } from 'react-admin'
import { vulcanDataProvider } from '@aginix/vulcan-data-provider'
import { getAuthProvider } from './auth_provider'
import useProps from '~/hooks/use_props'

const dataProvider = vulcanDataProvider({
  apiUrl: '/api',
  httpClient: fetchUtils.fetchJson,
})

export const AdminApp = () => {
  const { user } = useProps()
  return (
    <Admin authProvider={getAuthProvider(user)} dataProvider={dataProvider}>
      <Resource name="users" />
    </Admin>
  )
}
