import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000de",
      // main: "#DADFE5",
      light: "#f8f9fa"
    },
    secondary: {
      main: "#bcbcbc",
      light: "#eff0f2"
    }
  }
})

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById("root")!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* </Provider> */}
  </React.StrictMode>
)
