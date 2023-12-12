import { FC, lazy } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from "./ErrorPage"

const Root = lazy(async () => await import("./Root")) // TODO: no need to lazy load this becasue it will be loaded always

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
    errorElement: <ErrorPage />
  }
])

const App: FC = () => <RouterProvider router={router} />

export default App
