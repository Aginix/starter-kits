import { createTheme } from '@mui/material/styles'

const headingFont = "'Kanit', system-ui, sans-serif"
const bodyFont = "'Bai Jamjuree', system-ui, sans-serif"

const theme = createTheme({
  typography: {
    // Body / default font for all variants unless overridden below
    fontFamily: bodyFont,
    // Headings use Kanit
    h1: { fontFamily: headingFont },
    h2: { fontFamily: headingFont },
    h3: { fontFamily: headingFont },
    h4: { fontFamily: headingFont },
    h5: { fontFamily: headingFont },
    h6: { fontFamily: headingFont },
  },
})

export default theme
