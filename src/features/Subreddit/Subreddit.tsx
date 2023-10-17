// import { useTheme } from "@mui/material/styles"
import { Avatar, Box, Paper, Stack, Typography } from "@mui/material"
import React from "react"
import { useParams } from "react-router-dom"
import { useGetSubredditQuery } from "../../api/apiSlice"
import AboutSubreddit from "../Post/AboutSubreddit"
import Posts from "../Posts/Posts"
import WithLoading from "../Utils/WithLoading"

const Subreddit: React.FC = () => {
  const { subreddit = "" } = useParams<{ subreddit?: string }>()
  // const theme = useTheme()
  const { data, error, isFetching, refetch } = useGetSubredditQuery(subreddit)

  const styles = {
    mainContaner: {
      flexDirection: { xs: "column", sm: "column", md: "row" },
      width: { xs: "100%", md: "90%" }
    },

    headerContaner: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "90%",
      marginBottom: "0.5rem",
      display: { xs: "none", md: "block" }
    },

    subredditContaner: {
      marginRight: { xs: "0rem", md: "1rem" }
    }
  }

  const dataInfo = data?.data

  return (
    <WithLoading error={error} isFetching={isFetching} onRetry={refetch}>
      <Stack alignItems="center">
        {dataInfo ? (
          <Paper elevation={3} sx={styles.headerContaner}>
            <Box
              sx={{
                display: "flex",
                // backgroundColor: theme.palette.background.default,
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                padding: "5rem"
              }}
            >
              <Box>
                <Stack alignItems="center" direction="row" spacing={3}>
                  {dataInfo.icon_img ? (
                    <Avatar
                      alt="Subreddit Icon"
                      src={dataInfo.icon_img}
                      sx={{ width: 100, height: 100 }}
                    />
                  ) : null}

                  <Stack>
                    <Typography variant="h4">
                      <strong>{dataInfo.title}</strong>
                    </Typography>
                    <Typography variant="h6">
                      {dataInfo.display_name_prefixed}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Paper>
        ) : null}

        <Stack sx={styles.mainContaner}>
          <Stack sx={styles.subredditContaner}>
            <AboutSubreddit />
          </Stack>
          <Posts subreddit={subreddit} />
        </Stack>
      </Stack>
    </WithLoading>
  )
}

export default Subreddit
