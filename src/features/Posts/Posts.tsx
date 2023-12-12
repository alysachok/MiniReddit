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
      width: "100%"
    },

    postWrapper: {
      display: "flex",
      height: "100%",
      width: "100%",

      overflow: "auto",
      overflowWrap: "break-word",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        boxShadow: "0.5px 2px 2px gray"
      },
      marginBottom: { xs: theme.spacing(1), md: theme.spacing(2) }
    },

    vote: {
      display: { xs: "none", sm: "flex", md: "flex" },
      width: { sm: "15%", md: "10%" },
      fontSize: { sm: "0.8rem", md: "1rem" },
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
      overflow: "auto"
    },

    postFooter: {
      display: "flex",
      flexDirection: "row",
      margin: "0.5rem"
    }
  }

  return (
    <WithLoading error={error} isFetching={isFetching} onRetry={refetch}>
      <Stack alignItems="center">
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          {data?.data?.children?.map((post: PostData) => (
            <Paper elevation={3} key={post.data.id} sx={styles.mainContaner}>
              <Box sx={styles.postWrapper}>
                <Box sx={styles.vote}>
                  <strong>{formatNumber(post.data.score)}</strong>
                </Box>
                <Divider flexItem orientation="vertical" />
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
                              fontSize={{ xs: "0.8rem", md: "0.9rem" }}
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
          ))}
        </Box>
      </Stack>
    </WithLoading>
  )
}

export default Posts
