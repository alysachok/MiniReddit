import { FC } from "react"
import Box from "@mui/material/Box"

interface Post {
  id: number
  title: string
}

const posts: Post[] = [
  { id: 0, title: "Funny" },
  { id: 1, title: "Auto" },
  { id: 2, title: "Nails" },
  { id: 3, title: "News" },
  { id: 4, title: "Popular" }
]

const Posts: FC = () => (
  <Box>
    {posts.map((post) => (
      <Box key={post.id}>
        <h1>{post.title}</h1>
        <Box
          sx={{
            margin: "auto",
            height: 500,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7]
            }
          }}
        />
      </Box>
    ))}
  </Box>
)

export default Posts
