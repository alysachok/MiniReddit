import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import { Stack, Box } from "@mui/material"
import Paper from "@mui/material/Paper"
import Divider from "@mui/material/Divider"
import { formatNumber, formatTime } from "../utils"
import BasicList from "./FeaturedSubreddits"

const AboutSubreddit: React.FC = () => {
  const { subreddit } = useParams<{ subreddit: string }>()
  const [subredditData, setSubredditData] = useState<any>(null)

  useEffect(() => {
    const fetchSubreddit = async () => {
      try {
        const response = await fetch(
          `https://www.reddit.com/r/${subreddit ?? ""}/about.json`
        )
        const data = await response.json()

        console.log(data)

        if (data?.data) {
          setSubredditData(data.data)
        }
      } catch (error) {
        console.error("Error fetching subreddit data:", error)
      }
    }

    fetchSubreddit()
  }, [subreddit])

  const styles = {
    subredditContaner: {
      marginLeft: "1rem",
      display: { xs: "none", md: "block" }
    }
  }

  return (
    <Stack sx={styles.subredditContaner}>
      <Paper
        elevation={3}
        sx={{
          width: "20rem",
          maxWidth: 360,
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
              <Typography variant="h6">About Community</Typography>
            </Box>

            <Divider />
            <Stack p="1rem">
              <Stack
                alignItems="center"
                direction="row"
                marginBottom="0.5rem"
                //   p="0.5rem"
                spacing="1rem"
              >
                {subredditData.icon_img ? (
                  <Avatar
                    alt="avatar of subreddit"
                    src={subredditData.icon_img}
                    sx={{ width: 50, height: 50 }}
                  />
                ) : null}
                <Typography>
                  <strong>{subredditData.display_name_prefixed}</strong>
                </Typography>
              </Stack>
              <Typography>{subredditData.public_description}</Typography>
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
    </Stack>
  )
}

export default AboutSubreddit
