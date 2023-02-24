import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#DADFE5",
      light: "#f8f9fa"
    },
    secondary: {
      main: "rgba(0, 0, 0, 0.87)",
      light: "#9b9b9b"
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
      {/* </Provider> */}
    </ThemeProvider>
  </React.StrictMode>
)
