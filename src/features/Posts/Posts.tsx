import { FC } from "react"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
// import { Link } from "react-router-dom"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import { Stack, Typography } from "@mui/material"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import Avatar from "@mui/material/Avatar"
import CardMedia from "@mui/material/CardMedia"

interface Post {
  id: number
  title: string
  tags: any[]
  image: string
}

const posts: Post[] = [
  {
    id: 0,
    title: "Funny",
    tags: ["new"],
    image:
      "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
  },
  {
    id: 1,
    title: "Auto",
    tags: ["hot"],
    image:
      "https://media.gettyimages.com/id/157373207/photo/balanced-stones-on-a-pebble-beach-during-sunset.jpg?s=612x612&w=gi&k=20&c=o2EIbVkoOYim9J_rHm0YUic16Sl42MuKgS9GOOH6_xU="
  },
  {
    id: 2,
    title: "Nails",
    tags: ["new"],
    image:
      "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
  },
  {
    id: 3,
    title: "News",
    tags: ["best"],
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
  },
  {
    id: 4,
    title: "Popular",
    tags: ["best", "hot", "new"],
    image:
      "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png"
  }
]

interface PostsProps {
  tag?: string
}

const Posts: FC<PostsProps> = ({ tag }) => {
  const lastTag = !tag ? "best" : tag
  const theme = useTheme()

  const selectedByTag = posts.filter((post) => post.tags.includes(lastTag))

  const styles = {
    media: {
      height: "100%",
      width: "100%",
      overflow: "auto"
    }
  }

  return (
    <Stack alignItems="center">
      <Box sx={{ width: "70%" }}>
        {selectedByTag.map((post) => (
          <Box
            key={post.id}
            sx={{
              margin: "auto",
              height: theme.spacing(100),
              backgroundColor: "primary.light",
              "&:hover": {
                boxShadow: "1px 2px 2px gray"
              }
            }}
          >
            <Stack direction="row" height="100%" margin="20px 0px 25px">
              <Box
                sx={{
                  width: "3%",
                  display: {
                    xs: "none",
                    sm: "flex"
                  },
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: theme.palette.secondary.light,
                  marginTop: theme.spacing(2)
                }}
              >
                <ArrowUpwardIcon />
                <Typography>1</Typography>
                <ArrowDownwardIcon />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "stretch",
                  backgroundColor: "white",
                  width: "100%",
                  "&:hover": {
                    boxShadow: "1px 2px 2px gray"
                  }
                }}
              >
                <Stack margin="1rem">
                  <Stack alignItems="center" direction="row" spacing={2}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 24, height: 24 }}
                    />
                    <Typography sx={{ fontWeight: "bold" }}>
                      Chanel Name
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.secondary.light,
                        display: { xs: "none", sm: "block" }
                      }}
                    >
                      {" "}
                      -{" "}
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.secondary.light,
                        display: { xs: "none", sm: "block" }
                      }}
                      variant="body2"
                    >
                      Posted By Username 6 days ago
                    </Typography>
                  </Stack>
                  <Typography
                    style={{
                      color: theme.palette.secondary.light,
                      marginBottom: theme.spacing(1),
                      marginTop: theme.spacing(1)
                    }}
                    variant="h4"
                  >
                    {post.title}
                  </Typography>
                  <CardMedia
                    alt="Reddit image"
                    component="img"
                    image={post.image}
                    style={styles.media}
                  />
                  <Stack
                    color={theme.palette.secondary.light}
                    flexDirection="row"
                    marginTop={theme.spacing(2)}
                  >
                    <ChatBubbleOutlineIcon />
                    <Typography
                      style={{
                        marginLeft: theme.spacing(1)
                      }}
                    >
                      26 Comments
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>
    </Stack>
  )
}

export default Posts
