import { FC } from "react"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"

interface Post {
  id: number
  title: string
  tags: any[]
}

const posts: Post[] = [
  { id: 0, title: "Funny", tags: ["new"] },
  { id: 1, title: "Auto", tags: ["hot"] },
  { id: 2, title: "Nails", tags: ["new"] },
  { id: 3, title: "News", tags: ["best"] },
  { id: 4, title: "Popular", tags: ["best", "hot", "new"] }
]

interface PostsProps {
  tag?: string
}

const Posts: FC<PostsProps> = ({ tag }) => {
  const lastTag = !tag ? "best" : tag
  const theme = useTheme()

  const selectedByTag = posts.filter((post) => post.tags.includes(lastTag))

  return (
    <Box>
      {selectedByTag.map((post) => (
        <Box key={post.id}>
          <h1 style={{ color: theme.palette.secondary.main }}>{post.title}</h1>
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
      ))}
    </Box>
  )
}

export default Posts
