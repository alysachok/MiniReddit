import { FC } from "react"
import Box from "@mui/material/Box"
import Posts from "../Posts/Posts"
import Avatar from "@mui/material/Avatar"

const subbredditName = "Name of subbreddit"

const Subreddit: FC = () => (
  <Box>
    <Box sx={{ display: "flex" }}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <h1>{subbredditName}</h1>
    </Box>
    <Posts />
  </Box>
)

export default Subreddit
