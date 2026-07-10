import { Admin, Resource, fetchUtils } from 'react-admin'
import { vulcanDataProvider } from '@aginix/vulcan-data-provider'
import { getAuthProvider } from './auth_provider'
import { i18nProvider } from './i18n_provider'
import { UserCreate, UserEdit, UserList, UserShow } from './users'
import theme from '~/lib/theme'
import useProps from '~/hooks/use_props'

const dataProvider = vulcanDataProvider({
  apiUrl: '/api',
  httpClient: fetchUtils.fetchJson,
})

export const AdminApp = () => {
  const { user } = useProps()
  return (
    <Admin
      authProvider={getAuthProvider(user)}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      theme={theme}
    >
      <Resource name="users" list={UserList} show={UserShow} create={UserCreate} edit={UserEdit} />
    </Admin>
  )
}
