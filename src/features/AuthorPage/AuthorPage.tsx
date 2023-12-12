import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined"
import SpeakerNotesOffOutlinedIcon from "@mui/icons-material/SpeakerNotesOffOutlined"
import {
  Box,
  ButtonGroup,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme
} from "@mui/material"
import React from "react"
import { Link as RouterLink, useParams } from "react-router-dom"
import { useGetPostsByAuthorQuery } from "../../api/apiSlice"
import PostContent from "../Post/PostContent"
import ShareButton from "../Posts/ShareButton"
import WithLoading from "../Utils/WithLoading"
import { formatNumber } from "../Utils/utils"
import AboutAuthor from "./AboutAuthor"

interface PostData {
  data: {
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
}

const AuthorPage: React.FC = () => {
  const theme = useTheme()
  const { author = "" } = useParams<{ author?: string }>()

  const { data, error, isFetching, refetch } = useGetPostsByAuthorQuery(author)

  const styles = {
    postContaner: {
      display: "flex",
      borderLeft: "1px solid lightgray",
      alignItems: "center",
      paddingRight: { xs: "0.2rem", md: "0.5rem" },
      overflowY: "hidden",
      maxHeight: "100%",
      width: "100%",
      height: "100%",
      overflow: "auto"
    },

    noPostsContainer: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "2.5rem",
      minHeight: "5rem",
      width: "100%",
      height: "100%"
    },

    mainContaner: {
      flexDirection: { xs: "column", sm: "column", md: "row" },
      width: { xs: "100%", md: "90%" }
    },

    postMainContaner: {
      marginTop: "auto",
      height: "auto",
      "&:hover": {
        boxShadow: "0.5px 2px 2px gray"
      }
    },

    postWrapper: {
      display: "flex",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "0rem",
      marginBottom: { xs: theme.spacing(1), md: theme.spacing(2) }
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

    postFooter: {
      display: "flex",
      flexDirection: "row",
      margin: "0.5rem"
    },

    aboutAutorContaner: {
      marginRight: { xs: "0rem", md: "1rem" },
      display: { xs: "block", sx: "block", md: "inline" }
    }
  }

  const userData = data?.data.children || []

  return (
    <WithLoading error={error} isFetching={isFetching} onRetry={refetch}>
      <Stack alignItems="center" padding={{ xs: "0.5rem", sm: "0rem" }}>
        <Stack sx={styles.mainContaner}>
          <Stack sx={styles.aboutAutorContaner}>
            <AboutAuthor />
          </Stack>
          <Box>
            {userData.length === 0 ? (
              <Box sx={styles.noPostsContainer}>
                <SpeakerNotesOffOutlinedIcon />
                <Typography marginRight="1rem"> No Posts Yet</Typography>
              </Box>
            ) : (
              userData.map((post: PostData) => (
                <Paper
                  elevation={3}
                  key={post.data.id}
                  sx={styles.postMainContaner}
                >
                  <Box sx={styles.postWrapper}>
                    <Box sx={styles.vote}>
                      <strong>{formatNumber(post.data.score)}</strong>
                    </Box>
                    <Box sx={styles.postContaner}>
                      <Stack width="100%">
                        <Stack alignItems="center">
                          <PostContent post={post.data} />
                        </Stack>
                        <Divider />

                        <Box sx={styles.postFooter}>
                          <ButtonGroup aria-label="outlined primary button group">
                            <RouterLink
                              to={`/r/${post.data.subreddit}/comments/${post.data.id}`}
                            >
                              <IconButton
                                size="small"
                                sx={{
                                  borderRadius: "4px",
                                  marginLeft: "0.4rem",
                                  color: theme.palette.primary.light
                                }}
                              >
                                <ModeCommentOutlinedIcon />
                                <Typography
                                  fontSize="0.9rem"
                                  marginLeft="0.4rem"
                                >
                                  {formatNumber(post.data.num_comments)}

                                  {post.data.num_comments === 1
                                    ? " Comment"
                                    : " Comments"}
                                </Typography>
                              </IconButton>
                            </RouterLink>
                            <ShareButton link={post.data.permalink} />
                          </ButtonGroup>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Paper>
              ))
            )}
          </Box>
        </Stack>
      </Stack>
    </WithLoading>
  )
}

export default AuthorPage
