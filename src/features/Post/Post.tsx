import { Box, Paper, Stack } from "@mui/material"
import React from "react"
import { useParams } from "react-router-dom"
import { useGetPostByIdQuery } from "../../api/apiSlice"
import AboutSubreddit from "./AboutSubreddit"
import Comments from "./Comments"
import PostContent from "./PostContent"

const Post: React.FC = () => {
  const { id = "" } = useParams<{
    id?: string
  }>()

  const { data } = useGetPostByIdQuery(id)
  const styles = {
    mainContaner: {
      flexDirection: { xs: "column", sm: "column", md: "row" },
      width: { xs: "100%", sm: "100%", md: "90%" }
    },

    postContaner: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      overflow: "auto",
      alignItems: "center"
    }
  }

  const post = data?.data?.children?.[0]?.data

  return (
    <Stack alignItems="center" padding={{ xs: "0.5rem", sm: "0.5rem" }}>
      <Stack sx={styles.mainContaner}>
        <Box
          marginBottom={{ xs: "0.5rem", sx: "0.8rem", md: "1rem" }}
          marginRight={{ sx: "0.8rem", md: "1rem" }}
        >
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
