import { Form } from '@adonisjs/inertia/react'
import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'

export default function Login() {
  return (
    <Container
      maxWidth="sm"
      sx={{ display: 'flex', alignItems: 'center', minHeight: 'calc(100dvh - 64px)', py: 6 }}
    >
      <Card sx={{ width: '100%' }}>
        <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
          <Stack spacing={1} sx={{ mb: 4 }}>
            <Typography variant="h4" component="h1">
              Login
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Enter your details below to login to your account
            </Typography>
          </Stack>

          <Form route="session.store">
            {({ errors, processing }) => (
              <Stack spacing={3}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  id="email"
                  autoComplete="username"
                  fullWidth
                  required
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  fullWidth
                  required
                  error={!!errors.password}
                  helperText={errors.password}
                />
                <Button type="submit" variant="contained" size="large" disabled={processing}>
                  {processing ? 'Logging in…' : 'Login'}
                </Button>
              </Stack>
            )}
          </Form>

          <Divider sx={{ my: 3, color: 'text.secondary' }}>or</Divider>

          <Button
            component="a"
            href="/auth/kmitl/redirect"
            variant="outlined"
            color="inherit"
            size="large"
            fullWidth
            startIcon={<SchoolIcon />}
          >
            Login with KMITL SSO
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}
