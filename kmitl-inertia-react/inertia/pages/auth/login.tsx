import { useState } from 'react'
import { Form } from '@adonisjs/inertia/react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import SchoolIcon from '@mui/icons-material/School'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box
      sx={{
        minHeight: 'calc(100dvh - 64px)',
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

          <Form route="session.store">
            {({ errors, processing }) => (
              <Stack spacing={2.5}>
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
            Continue with KMITL SSO
          </Button>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 3, textAlign: 'center' }}>
            Use your KMITL account to sign in securely.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
