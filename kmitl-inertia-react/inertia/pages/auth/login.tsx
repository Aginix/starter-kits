import { Form } from '@adonisjs/inertia/react'

export default function Login() {
  return (
    <div className="form-container">
      <div>
        <h1> Login </h1>
        <p>Enter your details below to login to your account</p>
      </div>

      <div>
        <Form route="session.store">
          {({ errors }) => (
            <>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="username"
                  data-invalid={errors.email ? 'true' : undefined}
                />
                {errors.email && <div>{errors.email}</div>}
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                />
                {errors.password ? <span>{errors.password}</span> : ''}
              </div>

              <div>
                <button type="submit" className="button">
                  Login
                </button>
              </div>
            </>
          )}
        </Form>
        <div style={{ marginTop: 16 }}>
          <div style={{ textAlign: 'center', opacity: 0.6, margin: '8px 0' }}>or</div>
          <a
            href="/auth/kmitl/redirect"
            className="button"
            style={{ display: 'block', textAlign: 'center' }}
          >
            Login with KMITL SSO
          </a>
        </div>
      </div>
    </div>
  )
}
