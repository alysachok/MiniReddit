import React, { useState, useEffect } from "react"
// import { useParams, useLocation, Link as RouterLink } from "react-router-dom"
import { useParams, Link as RouterLink } from "react-router-dom"

import { formatTimeAgo } from "../utils"
import { Stack, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
// import Avatar from "@mui/material/Avatar"

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

const PostTitleAndAutor: React.FC<PostProps> = ({ postData }) => {
  const theme = useTheme()
  const [post, setPost] = useState<PostData | null>(null)
  const { id = "" } = useParams()

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
    postContaner: {
      display: "flex",
      flexDirection: "column",
      width: "80%"
    },

    autorAndSubreddit: {
      alignItems: { md: "center" },
      flexDirection: { xs: "column", md: "row" },
      spacing: "1",
      width: "100%"
    },

    titlePostTypography: {
      color: theme.palette.primary.main,
      textDecoration: "none",
      marginBottom: { xs: theme.spacing(1), md: theme.spacing(2) },
      marginTop: { xs: theme.spacing(0.2), md: theme.spacing(0.5) },
      width: "100%"
    },

    typography: {
      color: theme.palette.primary.main,
      fontSize: { xs: "0.8rem", md: "1rem" }
    }
  }

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <Stack marginLeft="1rem" marginTop="1rem">
      <Stack sx={styles.autorAndSubreddit}>
        <Stack alignItems="center" direction="row">
          <Typography sx={styles.typography}>
            Posted by {post.author} {formatTimeAgo(post.created_utc)}
          </Typography>
        </Stack>
      </Stack>
      {/* POST TITLE */}
      <RouterLink
        style={{ textDecoration: "none" }}
        to={`/r/${post.subreddit}/comments/${post.id}`}
      >
        <Typography sx={styles.titlePostTypography} variant="h6">
          <strong>{post.title}</strong>
        </Typography>
      </RouterLink>
    </Stack>
  )
}

export default PostTitleAndAutor
