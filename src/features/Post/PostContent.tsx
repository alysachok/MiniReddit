import { Box, Stack, Typography } from "@mui/material"
import CardMedia from "@mui/material/CardMedia"
import Link from "@mui/material/Link"
import { useTheme } from "@mui/material/styles"
import React from "react"
import { Link as RouterLink } from "react-router-dom"
import { extractPartUrl, formatTimeAgo } from "../Utils/utils"
import Gallery from "./Gallery"

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
  post: PostData
}

const PostContent: React.FC<PostProps> = ({ post }) => {
  const theme = useTheme()

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
      objectFit: "scale-down",
      maxWidth: "100%"
    },

    media: {
      height: theme.spacing(100),
      width: "100%",
      overflow: "auto",
      maxWidth: "100%",
      maxHeight: "100%"
    },

    textContaner: {
      fontSize: { xs: "0.8rem", md: "1rem" },
      paddingLeft: { xs: theme.spacing(1), md: theme.spacing(2) },
      paddingRight: { xs: theme.spacing(1), md: theme.spacing(2) },
      paddingBottom: { xs: theme.spacing(1), md: theme.spacing(2) },
      overflowY: "auto",
      overflow: "auto",
      overflowWrap: "break-word",
      maxWidth: "100%",
      maxHeight: "100%"
    },

    autorAndSubreddit: {
      alignItems: { md: "center" },
      flexDirection: { xs: "column", md: "row" },
      spacing: "1",
      width: "100%"
    },

    titlePostTypography: {
      color: theme.palette.primary.main,
      overflow: "auto",
      overflowWrap: "break-word",
      textDecoration: "none",
      marginBottom: { xs: theme.spacing(1), md: theme.spacing(2) },
      marginTop: { xs: theme.spacing(0.2), md: theme.spacing(1) },
      width: "100%",
      fontSize: { xs: "1rem", md: "1.5rem" }
    },

    typography: {
      display: { xs: "none", md: "block" },
      color: theme.palette.primary.light,
      fontSize: { xs: "0.7rem", md: "0.9rem" },
      paddingRight: { xs: "0.5rem" }
    },

    subredditAndAuthorTypography: {
      color: theme.palette.primary.main,
      fontSize: { xs: "0.8rem", md: "1rem" },
      paddingRight: { xs: "0.5rem" }
    }
  }

  if (!post) {
    return null
  }

  return (
    <Stack direction="column" margin="0px" width="100%">
      <Stack
        paddingLeft={{ xs: theme.spacing(1), md: theme.spacing(2) }}
        paddingRight={{ xs: theme.spacing(1), md: theme.spacing(2) }}
        paddingTop={{ xs: theme.spacing(1), md: theme.spacing(2) }}
      >
        <Stack sx={styles.autorAndSubreddit}>
          <Stack alignItems="center" direction="row">
            <RouterLink
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/r/${post.subreddit}`}
            >
              <Box sx={styles.subredditAndAuthorTypography}>
                <strong>{post.subreddit_name_prefixed}</strong>
              </Box>
            </RouterLink>

            <Typography sx={styles.typography}>Posted by</Typography>

            <RouterLink
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/user/${post.author}`}
            >
              <Typography sx={styles.subredditAndAuthorTypography}>
                {post.author}
              </Typography>
            </RouterLink>
            <Typography sx={styles.typography}>
              {formatTimeAgo(post.created_utc)}
            </Typography>
          </Stack>
        </Stack>
        {/* POST TITLE */}
        <RouterLink
          style={{ textDecoration: "none" }}
          to={`/r/${post.subreddit}/comments/${post.id}`}
        >
          <Typography sx={styles.titlePostTypography}>
            <strong>{post.title}</strong>
          </Typography>
        </RouterLink>
      </Stack>
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
            alt={post.title}
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
      {/* LINK */}
      {post.post_hint === "link" && (
        <Stack
          flexDirection={{ xs: "column", sm: "row", md: "row" }}
          justifyContent="space-between"
          paddingBottom="1rem"
          paddingLeft="2rem"
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
                alt={post.title}
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
