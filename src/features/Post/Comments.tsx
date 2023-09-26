import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Stack, Typography, Box, CircularProgress } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import SpeakerNotesOffOutlinedIcon from "@mui/icons-material/SpeakerNotesOffOutlined"
import ShareButton from "../Posts/ShareButton"
import VerticalAlignTopOutlinedIcon from "@mui/icons-material/VerticalAlignTopOutlined"
import { formatNumber, formatTimeAgo } from "../utils"
import Paper from "@mui/material/Paper"
import Divider from "@mui/material/Divider"

interface Comment {
  id: string
  body: string
  author: string
  permalink: string
  score: number
  created_utc: number
}

const Comments: React.FC = () => {
  const theme = useTheme()
  const [comments, setComments] = useState<Comment[]>([])
  const { subreddit, id } = useParams()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const postURL = `https://www.reddit.com/r/${subreddit ?? ""}/comments/${
      id ?? ""
    }.json`

    const fetchComments = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(postURL)
        const data = await response.json()

        console.log(data?.[1]?.data)
        const commentsData =
          data?.[1]?.data?.children?.map((child: any) => child.data) || []

        setComments(commentsData)

        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching Reddit comments:", error)
        setIsLoading(false)
      }
    }

    fetchComments()
  }, [id, subreddit])

  const styles = {
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh", // Set the height to 100% of the viewport height
      marginRight: { xs: "0rem", md: "1rem" },
      marginTop: "1rem"
    },

    noCommentsContainer: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "2.5rem",
      minHeight: "5rem",
      width: "100%",
      height: "100%"
    },

    mainContaner: {
      height: "100%",
      width: "100%"
      // backgroundColor: theme.palette.secondary.main
    },

    timeAgoTypography: {
      fontSize: "0.8rem",
      marginLeft: "0.5rem"
    },

    commentTopAndBottomContaner: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      color: theme.palette.primary.main,
      padding: "0.3rem",
      spacing: { xs: theme.spacing(0.5), md: theme.spacing(1) },
      width: "100%"
    },

    commentContaner: {
      backgroundColor: theme.palette.secondary.light,
      margin: { xs: "0.5rem", md: "0.8rem" },
      paddingLeft: { xs: "1rem", md: "1.5rem" },

      "&:hover": {
        boxShadow: "1px 2px 2px gray"
      }
    }
  }

  return (
    <Stack direction="row" height="100%">
      {isLoading ? (
        // Display loading indicator when isLoading is true
        <Paper elevation={3} sx={styles.loadingContainer}>
          <CircularProgress /> {/* Loading indicator */}
        </Paper>
      ) : (
        // Display comments when isLoading is false
        <Paper elevation={3} sx={styles.mainContaner}>
          <Typography margin="1rem" variant="h6">
            Comments
          </Typography>

          {comments.length === 0 ? (
            <Box sx={styles.noCommentsContainer}>
              <SpeakerNotesOffOutlinedIcon />
              <Typography> No Comments Yet</Typography>
            </Box>
          ) : (
            comments.map((comment) => (
              <Box key={comment.id} sx={styles.commentContaner}>
                <Stack sx={styles.commentTopAndBottomContaner}>
                  <Typography>
                    <strong>{comment.author}</strong>
                  </Typography>
                  <Typography sx={styles.timeAgoTypography}>
                    {formatTimeAgo(comment.created_utc)}
                  </Typography>
                </Stack>
                <Typography padding="0.5rem">{comment.body}</Typography>
                <Divider />
                <Stack sx={styles.commentTopAndBottomContaner}>
                  <VerticalAlignTopOutlinedIcon />
                  {formatNumber(comment.score)}
                  <Typography>
                    {comment.score === 1 ? "Upvote" : "Upvotes"}
                  </Typography>
                  <ShareButton link={comment.permalink} />
                </Stack>
              </Box>
            ))
          )}
        </Paper>
      )}
    </Stack>
  )
}

export default Comments
