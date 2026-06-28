import { createTheme } from '@mui/material/styles'

const headingFont = "'Kanit', system-ui, sans-serif"
const bodyFont = "'Bai Jamjuree', system-ui, sans-serif"

// Swiss Modernism palette: professional navy + blue accent on a light canvas.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0F172A', contrastText: '#FFFFFF' },
    secondary: { main: '#334155' },
    info: { main: '#0369A1' },
    error: { main: '#DC2626' },
    background: { default: '#F8FAFC', paper: '#FFFFFF' },
    text: { primary: '#020617', secondary: '#475569' },
    divider: '#E2E8F0',
  },
  shape: { borderRadius: 10 },
  typography: {
    // Body text -> Bai Jamjuree (default for every variant unless overridden).
    fontFamily: bodyFont,
    // Headings -> Kanit.
    h1: { fontFamily: headingFont, fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontFamily: headingFont, fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontFamily: headingFont, fontWeight: 600, letterSpacing: '-0.01em' },
    h4: { fontFamily: headingFont, fontWeight: 600 },
    h5: { fontFamily: headingFont, fontWeight: 600 },
    h6: { fontFamily: headingFont, fontWeight: 600 },
    button: { fontFamily: headingFont, fontWeight: 600, textTransform: 'none' },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 8 } },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: ({ theme: t }) => ({ border: `1px solid ${t.palette.divider}` }),
      },
    },
  },
})

export default theme
