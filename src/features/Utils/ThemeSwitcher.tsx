// // ThemeApp.tsx
// import Brightness4Icon from "@mui/icons-material/Brightness4"
// import Brightness7Icon from "@mui/icons-material/Brightness7"
// import Box from "@mui/material/Box"
// import IconButton from "@mui/material/IconButton"
// import { ThemeProvider, createTheme } from "@mui/material/styles"
// import * as React from "react"

// // Create a context for toggling between dark and light modes
// const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

// function ThemeApp() {
//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: "#000000de",
//         light: "#d5ebfb"
//       },
//       secondary: {
//         main: "#bcbcbc",
//         light: "#eff0f2"
//       }
//     }
//   })

//   const darkTheme = createTheme({
//     palette: {
//       primary: {
//         main: "#000"
//       },
//       secondary: {
//         main: "#bcbcbc",
//         light: "#eff0f2"
//       }
//     }
//   })
//   const colorMode = React.useContext(ColorModeContext)

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         width: "100%",
//         alignItems: "center",
//         justifyContent: "center",
//         bgcolor: "background.default",
//         color: "text.primary",
//         borderRadius: 1,
//         p: 3
//       }}
//     >
//       {theme.palette.mode} mode
//       <IconButton
//         color="inherit"
//         onClick={colorMode.toggleColorMode}
//         sx={{ ml: 1 }}
//       >
//         {theme.palette.mode === "dark" ? (
//           <Brightness7Icon />
//         ) : (
//           <Brightness4Icon />
//         )}
//       </IconButton>
//     </Box>
//   )
// }

// function ToggleColorModeProvider({ children }: { children: React.ReactNode }) {
//   const [mode, setMode] = React.useState<"light" | "dark">("light")

//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
//       }
//     }),
//     []
//   )

//   const theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode
//         }
//       }),
//     [mode]
//   )

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
//         {children}
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   )
// }

// export { ThemeApp, ToggleColorModeProvider }

import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import * as React from "react"

// Create a context for toggling between dark and light modes
const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function ThemeSwitcher() {
  const theme = createTheme({
    palette: {
      //   primary: {
      //     main: "#000000de",
      //     light: "#d5ebfb"
      //   },
      //   secondary: {
      //     main: "#bcbcbc",
      //     light: "#eff0f2"
      //   },
      mode: "light" // Set the initial mode to "light"
    }
  })

  const colorMode = React.useContext(ColorModeContext)

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        color="inherit"
        onClick={colorMode.toggleColorMode}
        sx={{ ml: 1 }}
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  )
}

function ToggleColorModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setIsDarkMode((prevMode) => !prevMode)
      }
    }),
    []
  )

  const darkTheme = createTheme({
    palette: {
      mode: "dark" // Set the initial mode to "dark" for darkTheme
    }
  })

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light"
        }
      }),
    [isDarkMode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export { ThemeSwitcher, ToggleColorModeProvider }
