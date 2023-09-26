import React, { useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import { formatNumber } from "../utils"
import { Stack, Box, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import Comments from "./Comments"
import PostContent from "../Post/PostContent"
// import BasicList from "./FeaturedSubreddits"
import Paper from "@mui/material/Paper"
import PostTitleAndAutor from "./PostTitleAndAutor"
import VerticalAlignTopOutlinedIcon from "@mui/icons-material/VerticalAlignTopOutlined"
import AboutSubreddit from "./AboutSubreddit"

interface PostData {
  id: string
  title: string
  author: string
  created_utc: number
  subreddit_name_prefixed: string
  subreddit: string
  subreddit_subscribers: number
  score: number
  num_comments: number
  thumbnail: string
  url: string
  permalink: string
  is_video: boolean
  upvote_ratio: number
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

interface PostProps {
  postData?: PostData // Optional post data object
}

const Post: React.FC<PostProps> = ({ postData }) => {
  const theme = useTheme()
  const [post, setPost] = useState<PostData | null>(null)
  const { id = "" } = useParams()
  const location = useLocation()

  // Check if the current URL contains the word "comments"
  const urlHasComments = location.pathname.includes("comments")

  useEffect(() => {
    const fetchPost = async () => {
      if (postData) {
        // If postData is provided, use it directly
        setPost(postData)
      } else {
        // If postId is provided, fetch the post data
        try {
          const response = await fetch(
            `https://www.reddit.com/api/info.json?id=t3_${id}`
          )
          const data = await response.json()
          const firstChild = data?.data?.children?.[0]?.data

          if (firstChild) {
            setPost(firstChild)
          }
        } catch (error) {
          console.error("Error fetching post data:", error)
        }
      }
    }

    fetchPost()
  }, [id, postData])

  const styles = {
    mainContaner: {
      flexDirection: "row",
      margin: { xs: "0rem", md: "0.5rem" },
      width: { xs: "100%", md: "90%" }
    },

    postContaner: {
      display: "flex",
      flexDirection: "column",
      width: "100%"
    },

    postTitleContaner: {
      flexDirection: "row"
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

    subredditContaner: {
      marginLeft: "1rem",
      display: { xs: "none", md: "block" }
    },
    ratingContaner: {
      alignItems: "center",
      flexDirection: "column",
      fontSize: "0.8rem",
      justifyContent: "center",
      width: "20%",
      display: "flex"
    }
  }

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <Stack alignItems="center">
      <Stack sx={styles.mainContaner}>
        <Paper sx={styles.postContaner}>
          <Box>
            {urlHasComments ? (
              <Stack sx={styles.postTitleContaner}>
                <Stack sx={styles.ratingContaner}>
                  <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="center"
                  >
                    <strong>
                      <VerticalAlignTopOutlinedIcon />
                    </strong>
                    <strong>{formatNumber(post.score)}</strong>
                  </Stack>
                  <Typography fontSize="0.8rem">
                    {post.upvote_ratio}% ratio
                  </Typography>
                </Stack>
                <PostTitleAndAutor />
              </Stack>
            ) : null}
            <Stack alignItems="center">
              <PostContent />
            </Stack>
          </Box>

          <Comments />
        </Paper>
        <Stack sx={styles.subredditContaner}>
          <AboutSubreddit />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Post
