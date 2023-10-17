import SpeakerNotesOffOutlinedIcon from "@mui/icons-material/SpeakerNotesOffOutlined"
import VerticalAlignTopOutlinedIcon from "@mui/icons-material/VerticalAlignTopOutlined"
import { Box, IconButton, Stack, Typography } from "@mui/material"
import Divider from "@mui/material/Divider"
import { useTheme } from "@mui/material/styles"
import { Link as RouterLink, useParams } from "react-router-dom"
import { useGetCommentsQuery } from "../../api/apiSlice"
import ShareButton from "../Posts/ShareButton"
import WithLoading from "../Utils/WithLoading"
import { formatNumber, formatTimeAgo } from "../Utils/utils"

interface Comment {
  data: {
    id: string
    body: string
    author: string
    permalink: string
    score: number
    created_utc: number
  }
}

const Comments: React.FC = () => {
  const theme = useTheme()
  const { subreddit = "", id = "" } = useParams<{
    subreddit?: string
    id?: string
  }>()

  const { data, error, isFetching, refetch } = useGetCommentsQuery({
    subreddit,
    id
  })

  const styles = {
    noCommentsContainer: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "2.5rem",
      paddingBottom: "4rem",
      width: "100%",
      height: "100%"
    },

    mainContaner: {
      height: "100%",
      width: "100%"
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
      backgroundColor: theme.palette.background.default,
      margin: { xs: "0.5rem", md: "0.8rem" },
      paddingLeft: { xs: "1rem", md: "1.5rem" },

      "&:hover": {
        boxShadow: "1px 2px 2px gray"
      }
    },

    commentBody: {
      padding: "0.5rem",
      overflowWrap: "break-word",
      fontSize: { xs: "0.8rem", md: "0.9rem" }
    }
  }

  return (
    <WithLoading error={error} isFetching={isFetching} onRetry={refetch}>
      <Stack alignItems="center" width="100%">
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          <Box sx={styles.mainContaner}>
            <Divider />
            <Box
              marginLeft={{ xs: "1rem", md: "2rem" }}
              paddingTop={{ xs: "1rem", md: "1.5rem" }}
            >
              <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>
                Comments
              </Typography>
            </Box>

            {data?.[1]?.data?.children?.length === 0 ? (
              <Box sx={styles.noCommentsContainer}>
                <SpeakerNotesOffOutlinedIcon />
                <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>
                  {" "}
                  No Comments Yet
                </Typography>
              </Box>
            ) : (
              data?.[1]?.data?.children?.map((comment: Comment) => (
                <Box key={comment.data.id} sx={styles.commentContaner}>
                  <Stack sx={styles.commentTopAndBottomContaner}>
                    <RouterLink
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/user/${comment.data.author}`}
                    >
                      <Typography>
                        <strong>{comment.data.author}</strong>
                      </Typography>
                    </RouterLink>

                    <Typography sx={styles.timeAgoTypography}>
                      {formatTimeAgo(comment.data.created_utc)}
                    </Typography>
                  </Stack>

                  <Typography sx={styles.commentBody}>
                    {comment.data.body}
                  </Typography>
                  <Stack sx={styles.commentTopAndBottomContaner}>
                    <IconButton
                      size="small"
                      sx={{
                        borderRadius: "4px",
                        marginRight: "1rem",
                        color: theme.palette.primary.light
                      }}
                    >
                      <VerticalAlignTopOutlinedIcon />
                      <Typography fontSize="0.9rem" marginLeft="0.3rem">
                        {formatNumber(comment.data.score)}
                        {comment.data.score === 1 ? " Upvote" : " Upvotes"}
                      </Typography>
                    </IconButton>

                    <ShareButton link={comment.data.permalink} />
                  </Stack>
                  <Divider />
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Stack>
    </WithLoading>
  )
}

export default Comments
