import { oidc } from '@aginix/adonis-ally-oidc'
import env from '#start/env'
import { defineConfig } from '@adonisjs/ally'

const allyConfig = defineConfig({
  kmitl: oidc({
    issuer: env.get('OIDC_ISSUER'),
    clientId: env.get('OIDC_CLIENT_ID'),
    clientSecret: env.get('OIDC_CLIENT_SECRET'),
    callbackUrl: `${env.get('APP_URL')}/auth/kmitl/callback`,
    postLogoutRedirectUri: env.get('APP_URL'),
    scopes: ['openid', 'profile', 'email', 'roles'],
  }),
})

export default allyConfig

declare module '@adonisjs/ally/types' {
  interface SocialProviders extends InferSocialProviders<typeof allyConfig> {}
}
