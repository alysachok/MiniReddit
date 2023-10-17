import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined"
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined"
import { Avatar, Box, Divider, Paper, Stack, Typography } from "@mui/material"
import React from "react"
import { useParams } from "react-router-dom"
import { useGetAuthorInfoQuery } from "../../api/apiSlice"
import BasicList from "../Post/FeaturedSubreddits"
import WithLoading from "../Utils/WithLoading"
import { formatNumber, formatTime } from "../Utils/utils"

const AboutSubreddit: React.FC = () => {
  const { author = "" } = useParams<{ author?: string }>()

  const { data, error, isFetching, refetch } = useGetAuthorInfoQuery(author)

  const styles = {
    sideBarContaner: {
      marginLeft: { xs: "0rem", md: "1rem" }
    }
  }

  const authorData = data?.data

  return (
    <WithLoading error={error} isFetching={isFetching} onRetry={refetch}>
      <Stack sx={styles.sideBarContaner}>
        <Paper
          elevation={3}
          sx={{
            width: { xs: "100%", md: "20rem" },
            marginBottom: "1rem"
          }}
        >
          {authorData ? (
            <Stack direction="column">
              <Box
                style={{
                  padding: "1rem"
                }}
              >
                <Typography variant="h6">About Author</Typography>
              </Box>
              <Divider />
              <Stack paddingLeft="1rem" paddingRight="1rem" paddingTop="1rem">
                <Stack
                  alignItems="center"
                  direction="row"
                  marginBottom="2rem"
                  spacing="1rem"
                >
                  {authorData.icon_img ? (
                    <Avatar
                      alt="avatar of subreddit"
                      src={authorData.icon_img}
                      sx={{ width: 50, height: 50 }}
                    />
                  ) : null}

                  <Typography variant="h6">
                    <strong>{authorData.name}</strong>
                  </Typography>
                </Stack>
                <Divider />
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  margin="0.5rem"
                >
                  <Stack
                    alignItems="center"
                    direction="column"
                    justifyContent="center"
                  >
                    <Stack alignItems="center" direction="row" flexWrap="wrap">
                      <StarBorderOutlinedIcon />
                      <Typography marginLeft="0.2rem">
                        <strong>Karma</strong>
                      </Typography>
                    </Stack>
                    <Typography fontSize="0.9rem">
                      {formatNumber(authorData.total_karma)}
                    </Typography>
                  </Stack>
                  <Stack alignItems="center" direction="column">
                    <Stack alignItems="center" direction="row" flexWrap="wrap">
                      <CakeOutlinedIcon />
                      <Typography marginLeft="0.2rem">
                        <strong>Cake day</strong>
                      </Typography>
                    </Stack>
                    <Typography fontSize="0.9rem">
                      {formatTime(authorData.created_utc)}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          ) : (
            <Typography>Loading subreddit data...</Typography>
          )}
        </Paper>
        <Box display={{ xs: "none", md: "block" }}>
          <Paper
            elevation={3}
            sx={{
              width: "20rem",
              maxWidth: 360,
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
