import { ThemeProvider, createTheme } from "@mui/material/styles"
import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000de",
      light: "#d5ebfb"
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
