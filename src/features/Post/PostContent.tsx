import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Gallery from "./Gallery"
import CardMedia from "@mui/material/CardMedia"
import Link from "@mui/material/Link"
import { extractPartUrl } from "../utils"
import { Stack, Typography, Box } from "@mui/material"
import { useTheme } from "@mui/material/styles"

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
  poll_data?: object
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

const PostContent: React.FC<PostProps> = ({ postData }) => {
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
      maxHeight: { xs: theme.spacing(30), md: theme.spacing(80) },
      overflowY: "auto",
      overflow: "auto",
      minHeight: { xs: "2rem", md: "6rem" },
      justifyContent: "center",
      width: "100%"
    },

    externalLink: {
      fontSize: { xs: "0.8rem", md: "1rem" },
      width: { xs: "100%" },
      overflow: "auto",
      overflowY: "auto",
      objectFit: { xs: "scale-down" },
      padding: { xs: "0.5rem" }
    },

    image: {
      maxHeight: "100%",
      overflow: "auto",
      objectFit: "scale-down"
    },

    media: {
      height: theme.spacing(100),
      width: "100%",
      overflow: "auto"
    },

    textContaner: {
      fontSize: { xs: "0.8rem", md: "1rem" },
      padding: { xs: "0.2rem" },
      // maxHeight: { xs: "0.5rem", md: "1rem" },
      marginLeft: { xs: "0.5rem", md: "1rem" },
      marginRight: { xs: "0.5rem", md: "1rem" },
      marginBottom: { xs: "0.5rem", md: "1rem" },
      overflowY: "auto",
      overflow: "auto"
    }
  }

  if (!post) {
    return null
  }

  return (
    <Stack direction="row" width="100%">
      {/* <Box sx={styles.postContaner}> */}
      {/* VIDEO */}
      {post.is_video && (
        <Box sx={styles.postContaner}>
          <Stack alignItems="center" overflow="auto" width="100%">
            <video autoPlay controls style={styles.media}>
              <source
                src={post.media.reddit_video.fallback_url}
                type="video/mp4"
              />
            </video>
          </Stack>
        </Box>
      )}

      {/* IMAGE */}
      {post.post_hint === "image" && (
        <Box sx={styles.postContaner}>
          <CardMedia
            alt="Reddit Post Image"
            component="img"
            src={post.url}
            sx={styles.image}
          />
        </Box>
      )}

      {/* POLL */}
      {post.poll_data && <Box />}

      {/* GALLERY */}
      {post.is_gallery &&
        post.gallery_data &&
        post.gallery_data.items.length > 0 &&
        post.gallery_data.items && (
          <Box sx={styles.postContaner}>
            <Gallery
              photos={post.gallery_data.items.map((item) => ({
                id: item.media_id,
                url: `https://i.redd.it/${item.media_id}.jpg`
              }))}
            />
          </Box>
        )}

      {/* TEXT */}
      {post.is_self && (
        <Stack>
          <Typography sx={styles.textContaner}>{post.selftext}</Typography>
        </Stack>
      )}
      {/* </Box> */}
      {/* LINK */}
      {post.post_hint === "link" && (
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          m="1rem"
          width="100%"
        >
          <Link
            href={post.url}
            rel="noopener"
            sx={styles.externalLink}
            target="_blank"
          >
            {extractPartUrl(post.url)}
          </Link>
          {post.thumbnail !== "default" && (
            <Stack
              alignItems="center"
              justifyContent="center"
              marginTop={{ xs: "0.5rem" }}
              width={{ xs: "100%", sm: "50%" }}
            >
              <CardMedia
                alt="Thumbnail"
                component="img"
                src={post.thumbnail}
                sx={{
                  height: "100%",
                  overflow: "auto",
                  width: { xs: "60%", sm: "40%" }
                }}
              />
            </Stack>
          )}
        </Stack>
      )}
    </Stack>
  )
}

export default PostContent
