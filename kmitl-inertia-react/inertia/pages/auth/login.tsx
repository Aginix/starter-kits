import { useState } from 'react'
import { usePage } from '@inertiajs/react'
import { Form } from '@adonisjs/inertia/react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import SchoolIcon from '@mui/icons-material/School'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

export default function Login() {
  const pageErrors = (usePage().props.errors ?? {}) as Record<string, string | undefined>
  // Reveal the email form upfront when a previous submit failed validation.
  const [showEmail, setShowEmail] = useState(() => Boolean(pageErrors.email || pageErrors.password))
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: { xs: 4, sm: 6 },
        backgroundColor: 'background.default',
        backgroundImage:
          'radial-gradient(60% 45% at 50% 0%, rgba(3, 105, 161, 0.07), transparent 70%),' +
          'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.045) 1px, transparent 0)',
        backgroundSize: 'auto, 22px 22px',
      }}
    >
      <Card
        sx={{
          'width': '100%',
          'maxWidth': 440,
          'boxShadow': '0 1px 2px rgba(15,23,42,0.04), 0 12px 32px rgba(15,23,42,0.08)',
          '@keyframes loginCardIn': {
            from: { opacity: 0, transform: 'translateY(12px)' },
            to: { opacity: 1, transform: 'none' },
          },
          'animation': 'loginCardIn 320ms ease-out both',
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      >
        <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
          <Stack spacing={2} sx={{ alignItems: 'center', textAlign: 'center', mb: 4 }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: 3,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <LockOutlinedIcon />
            </Box>
            <Box>
              <Typography variant="h4" component="h1">
                Welcome back
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
                Sign in to continue to your account
              </Typography>
            </Box>
          </Stack>

          <Button
            component="a"
            href="/auth/kmitl/redirect"
            variant="contained"
            size="large"
            fullWidth
            startIcon={<SchoolIcon />}
          >
            Continue with KMITL SSO
          </Button>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
            Use your KMITL account to sign in securely.
          </Typography>

          <Divider sx={{ my: 3, color: 'text.secondary' }}>or</Divider>

          <Button
            onClick={() => setShowEmail((v) => !v)}
            variant="text"
            color="inherit"
            fullWidth
            aria-expanded={showEmail}
            endIcon={
              <ExpandMoreIcon
                sx={{
                  transition: 'transform 200ms ease',
                  transform: showEmail ? 'rotate(180deg)' : 'none',
                }}
              />
            }
          >
            Sign in with email
          </Button>

          <Collapse in={showEmail} unmountOnExit>
            <Form route="session.store">
              {({ errors, processing }) => (
                <Stack spacing={2.5} sx={{ mt: 2.5 }}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    id="email"
                    autoComplete="username"
                    autoFocus
                    fullWidth
                    required
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    fullWidth
                    required
                    error={!!errors.password}
                    helperText={errors.password}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword((show) => !show)}
                              edge="end"
                              size="small"
                              aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                              {showPassword ? (
                                <VisibilityOff fontSize="small" />
                              ) : (
                                <Visibility fontSize="small" />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    loading={processing}
                  >
                    Sign in
                  </Button>
                </Stack>
              )}
            </Form>
          </Collapse>
        </CardContent>
      </Card>
    </Box>
  )
}
