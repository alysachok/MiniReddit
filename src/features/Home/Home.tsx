import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { FC } from "react"
import { useLocation } from "react-router-dom"
import Posts from "../Posts/Posts"
import Navigation from "../Navigation/Navigation"

const Home: FC = () => {
  const location = useLocation()
  const pathName = location.pathname.slice(1)

  return (
    <Box>
      <Stack
        alignItems="center"
        display={{ xs: "none", sm: "flex", md: "flex" }}
      >
        <Navigation />
      </Stack>
      <Posts subreddit={pathName} />

      <Stack
        alignItems="center"
        bottom="0"
        display={{ xs: "block", sm: "none", md: "none" }}
        position="fixed"
        width="100%"
      >
        <Navigation />
      </Stack>
      <Box />
    </Box>
  )
}

export default Home
