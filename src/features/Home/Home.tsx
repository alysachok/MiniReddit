import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { FC } from "react"
import { useLocation } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import Posts from "../Posts/Posts"

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

        <Stack width="80%">
          <Posts subreddit={pathName} />
        </Stack>
      </Stack>
      <Stack display={{ xs: "block", sm: "none", md: "none" }} width="100%">
        <Posts subreddit={pathName} />
        <Stack alignItems="center" bottom="0" position="fixed" width="100%">
          <Navigation />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Home
