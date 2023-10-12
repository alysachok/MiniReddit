import { Avatar, Box, Divider, Paper, Stack, Typography } from "@mui/material"
import React from "react"
import { Link as RouterLink, useParams } from "react-router-dom"
import { useGetSubredditQuery } from "../../api/apiSlice"
import WithLoading from "../Utils/WithLoading"
import { formatNumber, formatTime } from "../Utils/utils"
import BasicList from "./FeaturedSubreddits"

const AboutSubreddit: React.FC = () => {
  const { subreddit = "" } = useParams<{
    subreddit?: string
  }>()

  const { data, error, isFetching, refetch } = useGetSubredditQuery(subreddit)

  const styles = {
    subredditContaner: {
      display: { xs: "none", md: "block" }
    }
  }

  const subredditData = data?.data

  return (
    <WithLoading error={error} isFetching={isFetching} onRetry={refetch}>
      <Stack>
        <Paper
          elevation={3}
          sx={{
            width: { xs: "100%", md: "20rem" },
            marginBottom: "1rem"
          }}
        >
          {subredditData ? (
            <Stack direction="column">
              <Box
                style={{
                  backgroundColor: subredditData.banner_background_color,
                  padding: "1rem"
                }}
              >
                <Typography variant="h5">About Community</Typography>
              </Box>

              <Divider />
              <Stack p="1rem">
                <Stack
                  alignItems="center"
                  direction="row"
                  marginBottom="0.5rem"
                  spacing="1rem"
                >
                  {subredditData.icon_img ? (
                    <Avatar
                      alt="avatar of subreddit"
                      src={subredditData.icon_img}
                      sx={{ width: 50, height: 50 }}
                    />
                  ) : null}

                  <RouterLink
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/r/${subreddit}/`}
                  >
                    <Typography>
                      <strong>{subredditData.display_name_prefixed}</strong>
                    </Typography>
                  </RouterLink>
                </Stack>
                <Box height="auto" width="100%">
                  <Typography style={{ overflowWrap: "break-word" }}>
                    {subredditData.public_description}
                  </Typography>
                </Box>

                <Typography fontSize="0.8rem" margin="0.5rem">
                  Created {formatTime(subredditData.created_utc)}
                </Typography>
                <Divider />
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  marginTop="0.5rem"
                >
                  <Stack
                    alignItems="center"
                    direction="column"
                    justifyContent="center"
                  >
                    <Typography fontSize="0.8rem">Members</Typography>
                    <strong>{formatNumber(subredditData.subscribers)}</strong>
                  </Stack>
                  <Stack alignItems="center" direction="column">
                    <Typography fontSize="0.8rem">Online</Typography>
                    <Stack direction="row">
                      <Typography color="green" paddingRight="0.3rem">
                        ●
                      </Typography>
                      <strong>
                        {formatNumber(subredditData.accounts_active)}
                      </strong>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          ) : (
            <Typography>Loading subreddit data...</Typography>
          )}
        </Paper>
        <Box sx={styles.subredditContaner}>
          <Paper
            elevation={3}
            sx={{
              width: { xs: "100%", md: "20rem" },
              marginBottom: "1rem"
            }}
          >
            <BasicList />
          </Paper>
        </Box>
      </Stack>
    </WithLoading>
  )
}

export default AboutSubreddit
