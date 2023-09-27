import { FC, useEffect, useState } from "react"
import { useTheme } from "@mui/material/styles"
import { Stack, Typography, Box, IconButton } from "@mui/material"
import { formatNumber } from "../utils"
import ShareButton from "./ShareButton"
import { Link as RouterLink } from "react-router-dom"
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined"
import PostContent from "../Post/PostContent"
import Paper from "@mui/material/Paper"
import Divider from "@mui/material/Divider"
import ButtonGroup from "@mui/material/ButtonGroup"
import PostTitleAndAutor from "../Post/PostTitleAndAutor"

interface PostsProps {
  subreddit: string
}

interface PostData {
  id: string
  title: string
  author: string
  created_utc: number
  subreddit_name_prefixed: string
  subreddit: string
  score: number
  num_comments: number
  thumbnail: string
  url: string
  upvote_ratio: number
  permalink: string
  is_video: boolean
  post_hint?: string
  media: {
    reddit_video: {
      fallback_url: string
    }
  }

  is_self: boolean
  selftext: string

  is_gallery: boolean
  gallery_data: {
    items: Array<{ media_id: string }>
  }
}

const Posts: FC<PostsProps> = ({ subreddit }) => {
  const theme = useTheme()
  const [posts, setPosts] = useState<PostData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          `https://www.reddit.com/r/${subreddit}.json`
        )
        const data = await response.json()

        const postsData = data?.data?.children?.map((child: any) => {
          const post = child.data

          console.log(post)

          return post
        })

        setPosts(postsData || [])
        setIsLoading(false)
      } catch (error) {
        console.log("Error:", error)
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [subreddit])

  const styles = {
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      p: { xs: "1rem", sm: "0.5rem", md: "1rem" },
      width: { xs: "100%", md: "80%" },
      marginTop: { xs: theme.spacing(1.5), md: theme.spacing(3) },
      height: "100vh" // Set the height to 100% of the viewport height
    },

    mainContaner: {
      margin: "auto",
      height: "auto",
      backgroundColor: theme.palette.primary.light,
      "&:hover": {
        boxShadow: "3px 3px 3px gray"
      }
    },

    voteWrapper: {
      display: "flex",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: { xs: theme.spacing(1), md: theme.spacing(2.5) }
    },

    vote: {
      width: { xs: "15%", md: "10%" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      color: theme.palette.primary.main,
      marginTop: theme.spacing(2)
    },

    postContaner: {
      display: "flex",
      alignItems: "center",
      paddingRight: { xs: "0.2rem", md: "0.5rem" },
      overflowY: "hidden",
      maxHeight: "100%",
      width: "100%",
      height: "100%",
      overflow: "auto",
      "&:hover": {
        boxShadow: "1px 2px 2px gray"
      }
    },

    typography: {
      color: theme.palette.primary.main,
      fontSize: { xs: "0.7rem", md: "1rem" },
      marginLeft: "1rem"
    },

    typographyData: {
      display: { xs: "none", sm: "block" },
      color: theme.palette.primary.main,
      fontSize: { xs: "0.5rem", md: "0.8rem" }
    },

    titlePostTypography: {
      color: theme.palette.primary.main,
      textDecoration: "none",
      marginBottom: { xs: theme.spacing(1), md: theme.spacing(2) },
      marginTop: { xs: theme.spacing(0.2), md: theme.spacing(0.5) },
      fontSize: { xs: "1rem", sm: "1.5rem" },
      width: "100%"
    },

    bottomTypographyStyle: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(2)
    },

    postFooter: {
      display: "flex",
      flexDirection: "row",
      margin: "0.5rem"
    }
  }

  return (
    <Stack alignItems="center">
      {isLoading ? (
        <Paper elevation={3} sx={styles.loadingContainer}>
          <Typography>Loading...</Typography>
        </Paper>
      ) : (
        <Box
          sx={{
            width: { xs: "100%", md: "80%" }
          }}
        >
          {posts.map((post) => (
            <Paper elevation={3} key={post.id} sx={styles.mainContaner}>
              <Box sx={styles.voteWrapper}>
                <Box sx={styles.vote}>
                  <strong>{formatNumber(post.score)}</strong>
                </Box>
                <Paper elevation={1} sx={styles.postContaner}>
                  <Stack width="100%">
                    <PostTitleAndAutor postData={post} />
                    <Stack alignItems="center">
                      <PostContent postData={post} />
                    </Stack>
                    <Divider />

                    <Box sx={styles.postFooter}>
                      <ButtonGroup aria-label="outlined primary button group">
                        <RouterLink
                          to={`/r/${post.subreddit}/comments/${post.id}`}
                        >
                          <IconButton
                            size="small"
                            sx={{
                              borderRadius: "4px",
                              color: theme.palette.primary.main
                            }}
                          >
                            <ModeCommentOutlinedIcon />
                            {formatNumber(post.num_comments)}
                            <Typography>
                              {post.num_comments === 1 ? "Comment" : "Comments"}
                            </Typography>
                          </IconButton>
                        </RouterLink>
                        <ShareButton link={post.permalink} />
                      </ButtonGroup>
                    </Box>
                  </Stack>
                </Paper>
              </Box>
            </Paper>
          ))}
        </Box>
      )}
    </Stack>
  )
}

export default Posts
