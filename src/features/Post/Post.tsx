import { FC } from "react"
import Box from "@mui/material/Box"

const post: { id: number; title: string } = { id: 0, title: "Funny" }

const Posts: FC = () => (
  <Box key={post.id}>
    <h1>{post.title}</h1>
    <Box
      sx={{
        margin: "auto",
        height: 500,
        backgroundColor: "primary.light",
        "&:hover": {
          opacity: [0.9, 0.8, 0.7]
        }
      }}
    />
  </Box>
)

export default Posts
