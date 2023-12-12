import "@testing-library/jest-dom"
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"

// Automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

test("renders elements on the Home screen", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  // check Mini logotext
  expect(await screen.findByText("Mini")).toBeInTheDocument()

  // check Reddit logotext
  expect(await screen.findByText("Reddit")).toBeInTheDocument()

  // check Logo Image
  expect(screen.getByAltText("logo")).toBeInTheDocument()

  // check Search Input
  expect(screen.getByRole("textbox")).toBeInTheDocument()

  // check Drawer Toggle Button
  expect(screen.getByTestId("drawer-toggle-button")).toBeInTheDocument()

  fireEvent.click(screen.getByTestId("drawer-toggle-button"))

  // check all menu items is present
  expect(await screen.findByText("User Settings")).toBeInTheDocument()
  expect(screen.getByText("Switch Theme")).toBeInTheDocument()
  expect(screen.getByText("Sourсe Code")).toBeInTheDocument()
  expect(screen.getByText("Visit Reddit")).toBeInTheDocument()
})

test("searches for a term", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const searchInput = screen.getByRole("textbox")

  // Wrap the user interaction inside 'act'
  await act(async () => {
    await userEvent.type(searchInput, "cat{enter}")
  })

  // This assumes the app shows some loading text or element
  expect(await screen.findByText(/Loading.../i)).toBeInTheDocument()

  // Expect the app to display search results related to 'cat'
  expect(window.location.pathname).toContain("/cat")
})
