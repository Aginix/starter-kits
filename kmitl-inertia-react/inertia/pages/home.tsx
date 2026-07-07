import { Link } from '@adonisjs/inertia/react'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ForumIcon from '@mui/icons-material/Forum'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'

const resources = [
  {
    icon: MenuBookIcon,
    title: 'Official Docs',
    description: 'Comprehensive reference for building with AdonisJS',
    href: 'https://docs.adonisjs.com/introduction',
  },
  {
    icon: OndemandVideoIcon,
    title: 'Adocasts',
    description: 'Guided video tutorials for everyday development',
    href: 'https://adocasts.com/',
  },
  {
    icon: ForumIcon,
    title: 'Discord',
    description: 'Connect with developers building with AdonisJS every day',
    href: 'https://discord.gg/vDcEjq6',
  },
]

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={2} sx={{ maxWidth: 720, mb: { xs: 6, md: 10 } }}>
        <Typography
          variant="overline"
          sx={{ color: 'info.main', fontWeight: 600, letterSpacing: '0.08em' }}
        >
          AdonisJS · Inertia · React
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontSize: { xs: 40, md: 56 }, lineHeight: 1.05 }}
        >
          It works — welcome to the power of a full-stack React app
        </Typography>
        <Typography variant="h6" component="p" sx={{ color: 'text.secondary', fontWeight: 400 }}>
          Powered by Inertia and React, this setup blends server-driven routing with rich
          client-side interactivity — seamless, fast, and cohesive.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
          <Button
            component={Link}
            route="session.create"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
          >
            Get started
          </Button>
          <Button
            component="a"
            href="https://docs.adonisjs.com/introduction"
            target="_blank"
            rel="noreferrer"
            variant="outlined"
            color="inherit"
            size="large"
          >
            Read the docs
          </Button>
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {resources.map(({ icon: Icon, title, description, href }) => (
          <Grid key={title} size={{ xs: 12, md: 4 }}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea
                component="a"
                href={href}
                target="_blank"
                rel="noreferrer"
                sx={{ height: '100%' }}
              >
                <CardContent
                  sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 3, height: '100%' }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 1,
                      borderRadius: 2,
                      bgcolor: 'action.hover',
                      color: 'info.main',
                      width: 'fit-content',
                    }}
                  >
                    <Icon />
                  </Box>
                  <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                    <Typography variant="h6">{title}</Typography>
                    <ArrowForwardIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
