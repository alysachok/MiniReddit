import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined"
import {
  Box,
  ButtonGroup,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { FC } from "react"
import { Link as RouterLink } from "react-router-dom"
import { useGetPostsBySubredditQuery } from "../../api/apiSlice"
import PostContent from "../Post/PostContent"
import WithLoading from "../Utils/WithLoading"
import { formatNumber } from "../Utils/utils"
import ShareButton from "./ShareButton"

interface PostsProps {
  subreddit: string
}

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

const Posts: FC<PostsProps> = ({ subreddit }) => {
  const theme = useTheme()
  const { data, error, isFetching, refetch } =
    useGetPostsBySubredditQuery(subreddit)

  const styles = {
    mainContaner: {
      height: "auto",
      "&:hover": {
        boxShadow: "3px 3px 3px gray"
      }
    },

    voteWrapper: {
      display: "flex",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        boxShadow: " 1px 2px 2px gray"
      },
      marginBottom: { xs: theme.spacing(1), md: theme.spacing(2.5) }
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
      borderLeft: "1px solid lightgray",
      alignItems: "center",
      paddingRight: { xs: "0.2rem", md: "0.5rem" },
      overflowY: "hidden",
      maxHeight: "100%",
      width: "100%",
      height: "100%",
      overflow: "auto"
    },

    postFooter: {
      display: "flex",
      flexDirection: "row",
      margin: "0.5rem"
    }
  }

  console.log(data?.data?.children)

  return (
    <WithLoading error={error} isFetching={isFetching} onRetry={refetch}>
      <Stack alignItems="center">
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {data?.data?.children?.map((post: PostData) => (
            <Paper elevation={3} key={post.data.id} sx={styles.mainContaner}>
              <Box sx={styles.voteWrapper}>
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
                              color: theme.palette.primary.main
                            }}
                          >
                            <ModeCommentOutlinedIcon />
                            <Typography fontSize="0.9rem" marginLeft="0.4rem">
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
          ))}
        </Box>
      </Stack>
    </WithLoading>
  )
}

export default Posts
