import { useTheme } from "@mui/material/styles"
import React from "react"
import { useParams } from "react-router-dom"
// import BasicList from "./FeaturedSubreddits"
import { Box, Paper, Stack } from "@mui/material"
import { useGetPostByIdQuery } from "../../api/apiSlice"
import AboutSubreddit from "./AboutSubreddit"
import Comments from "./Comments"
import PostContent from "./PostContent"

// interface PostData {
//   id: string
//   title: string
//   author: string
//   created_utc: number
//   subreddit_name_prefixed: string
//   subreddit: string
//   subreddit_subscribers: number
//   score: number
//   num_comments: number
//   thumbnail: string
//   url: string
//   permalink: string
//   is_video: boolean
//   upvote_ratio: number
//   post_hint?: string
//   media: {
//     reddit_video: {
//       fallback_url: string
//     }
//   }

//   is_self: boolean
//   selftext: string

//   is_gallery: boolean
//   gallery_data: {
//     items: Array<{ media_id: string }>
//   }
// }

// interface PostProps {
//   postData?: PostData // Optional post data object
// }

const Post: React.FC = () => {
  const theme = useTheme()
  // const [post, setPost] = useState<PostData | null>(null)

  // const location = useLocation()
  // const urlHasComments = location.pathname.includes("comments")

  const { id = "" } = useParams<{
    id?: string
  }>()

  const { data } = useGetPostByIdQuery(id)
  const styles = {
    mainContaner: {
      flexDirection: { xs: "column", sm: "column", md: "row" },
      width: { xs: "100%", md: "90%" }
    },

    postContaner: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      marginBottom: "1rem",
      alignItems: "center"
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

  console.log("post", data?.data?.children?.[0]?.data.score)

  const post = data?.data?.children?.[0]?.data

  return (
    <Stack alignItems="center">
      <Stack sx={styles.mainContaner}>
        <Box marginRight={{ xs: "0rem", md: "1rem" }}>
          <AboutSubreddit />
        </Box>
        <Paper sx={styles.postContaner}>
          <PostContent post={post} />
          <Comments />
        </Paper>
      </Stack>
    </Stack>
  )
}

export default Post
