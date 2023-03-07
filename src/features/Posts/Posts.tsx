import { FC } from "react"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import { Stack, Typography } from "@mui/material"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import Avatar from "@mui/material/Avatar"
import CardMedia from "@mui/material/CardMedia"
import posts from "../utils"

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
    },
    postWrapper: {
      display: "flex",
      height: "100%",
      marginTop: theme.spacing(3)
    },
    linkStyle: {
      textDecoration: "none"
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
            <Box sx={styles.postWrapper}>
              <Box
                sx={{
                  width: "4%",
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
                <Stack margin={2}>
                  <Stack alignItems="center" direction="row" spacing={2}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 24, height: 24 }}
                    />
                    <Typography sx={{ fontWeight: "bold" }}>
                      Channel Name
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
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  )
}

export default Posts
