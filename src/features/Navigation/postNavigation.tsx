import { css } from "@emotion/react"
import { Button, Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
// import { useTheme } from "@mui/material/styles"
import { FC } from "react"
import { NavLink, useParams } from "react-router-dom"

/** @jsxImportSource @emotion/react */

const getStyles = () => ({
  link: css({
    textDecoration: "none"
  })
})

interface PostLinkProps {
  label: string
  to: string
}

const TopLink = ({ label, to }: PostLinkProps) => {
  // const theme = useTheme()
  const styles = getStyles()

  return (
    <NavLink css={styles.link} to={to}>
      {({ isActive }) => (
        <Button
          size="small"
          sx={{
            borderRadius: 10
            // backgroundColor: isActive
            //   ? theme.palette.background.default
            //   : theme.palette.background.default,
            // color: theme.palette.primary.main
          }}
          variant="outlined"
        >
          {label}
        </Button>
      )}
    </NavLink>
  )
}

const Navigation: FC = () => {
  const { subreddit, id } = useParams()
  const styles = {
    navContainer: {
      p: { xs: "0.5rem", sm: "0.5rem", md: "0.5rem" }
    }
  }

  return (
    <Stack sx={styles.navContainer}>
      <Stack
        alignItems="center"
        direction="row"
        spacing={{ xs: 0.7, sm: 2, md: 1 }}
        sx={{
          m: { xs: "0rem", md: "1rem" }
        }}
      >
        <TopLink label="Home" to="/" />
        <Typography> / </Typography>
        <TopLink label="Subreddits" to="/subreddits/" />
        {subreddit && <Typography> / </Typography>}
        {subreddit && (
          <TopLink label={subreddit} to={`/subreddit/${subreddit}`} />
        )}
        {id && <Typography> / </Typography>}
        {id && <TopLink label={id} to={`/subreddit/${id}`} />}
      </Stack>
    </Stack>
  )
}

export default Navigation
