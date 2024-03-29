// import { ThemeProvider, createTheme } from "@mui/material/styles"
import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import { ToggleColorModeProvider } from "./features/Utils/ThemeSwitcher" // Import your ThemeApp
import "./index.css"

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById("root")!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleColorModeProvider>
        <App />
      </ToggleColorModeProvider>
    </Provider>
  </React.StrictMode>
)
