import { FC, lazy } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./ErrorPage"

const Root = lazy(async () => await import("./Root"))

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
    errorElement: <ErrorPage />
  },
])

const App: FC = () => (
      <RouterProvider router={router} />
)

export default App
