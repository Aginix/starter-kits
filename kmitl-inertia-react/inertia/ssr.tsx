import { client } from '~/client'
import { type ReactElement } from 'react'
import Layout from '~/layouts/default'
import { type Data } from '@generated/data'
import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '~/lib/theme'
import { TuyauProvider } from '@adonisjs/inertia/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      return resolvePageComponent(
        `./pages/${name}.tsx`,
        import.meta.glob('./pages/**/*.tsx', { eager: true }),
        (resolvedPage: ReactElement<Data.SharedProps>) => <Layout children={resolvedPage} />
      )
    },
    setup: ({ App, props }) => {
      return (
        <ThemeProvider theme={theme}>
          <TuyauProvider client={client}>
            <App {...props} />
          </TuyauProvider>
        </ThemeProvider>
      )
    },
  })
}
