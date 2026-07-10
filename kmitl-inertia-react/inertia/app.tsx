import './css/app.css'
import type { ReactElement } from 'react'
import { client } from './client'
import Layout from '~/layouts/default'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '~/lib/theme'
import { TuyauProvider } from '@adonisjs/inertia/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import type { Data } from '@generated/data'

const appName = import.meta.env.VITE_APP_NAME || 'KMITL App'

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  resolve: async (name) => {
    const page: any = await resolvePageComponent(
      `./pages/${name}.tsx`,
      import.meta.glob('./pages/**/*.tsx')
    )

    page.default.layout =
      page.default.layout ||
      ((childPage: ReactElement<Data.SharedProps>) => <Layout children={childPage} />)

    return resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx'))
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <ThemeProvider theme={theme}>
        <TuyauProvider client={client}>
          <App {...props} />
        </TuyauProvider>
      </ThemeProvider>
    )
  },
  progress: {
    color: '#4B5563',
  },
})
