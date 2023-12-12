import Brightness7Icon from "@mui/icons-material/Brightness7"
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import * as React from "react"

// Create a context for toggling between dark and light modes
const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function ThemeSwitcher() {
  const colorMode = React.useContext(ColorModeContext)

  return (
    <ListItemButton onClick={colorMode.toggleColorMode}>
      <ListItemIcon>
        <Brightness7Icon />
      </ListItemIcon>
      <ListItemText primary="Switch Theme" />
    </ListItemButton>
  )
}

function ToggleColorModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  console.log(isDarkMode)

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setIsDarkMode((prevMode) => !prevMode)
      }
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          primary: {
            main: isDarkMode ? "#4ECDC4" : "#1F2C56",
            light: isDarkMode ? "#4ECDC4" : "#3A4B8A"
          },
          secondary: {
            main: isDarkMode ? "#D3F4FB" : "#FF6B6B"
          },
          background: {
            paper: isDarkMode ? "#1E1E1E" : "#FFFFFF",
            default: isDarkMode ? "#121212" : "#F0F0F0"
          }
        }
      }),
    [isDarkMode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export { ThemeSwitcher, ToggleColorModeProvider }
