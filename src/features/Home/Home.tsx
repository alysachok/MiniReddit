import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { FC } from "react"
import { useLocation } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import Posts from "../Posts/Posts"

const Home: FC = () => {
  const location = useLocation()
  const subreddit = location.pathname.slice(1)

  return (
    <Box>
      <Stack
        alignItems="center"
        display={{ xs: "none", sm: "flex", md: "flex" }}
      >
        <Navigation />
        <Stack width={{ sm: "100%", md: "80%" }}>
          <Posts subreddit={subreddit} />
        </Stack>
      </Stack>
      <Stack display={{ xs: "block", sm: "none", md: "none" }} width="100%">
        <Stack
          height="auto"
          overflow="auto"
          paddingBottom="3rem"
          paddingLeft={{ xs: "0.5rem" }}
          paddingRight={{ xs: "0.5rem" }}
          paddingTop={{ xs: "0.5rem" }}
          width="100%"
        >
          <Posts subreddit={subreddit} />
        </Stack>

        <Stack
          alignItems="center"
          bottom="0"
          position="fixed"
          width="100%"
          zIndex="tooltip"
        >
          <Navigation />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Home
