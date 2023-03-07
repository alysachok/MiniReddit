import { css } from "@emotion/react"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import { Button } from "@mui/material"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { FC, ReactNode } from "react"
import { NavLink, useLocation } from "react-router-dom"
import Posts from "../Posts/Posts"
import { useTheme } from "@mui/material/styles"
/** @jsxImportSource @emotion/react */

const getStyles = () => ({
  link: css({
    textDecoration: "none"
  })
})

interface TopLinkProps {
  label: string
  to: string
  icon: ReactNode
}

const TopLink = ({ label, to, icon }: TopLinkProps) => {
  const theme = useTheme()
  const styles = getStyles()

  return (
    <NavLink css={styles.link} to={to}>
      {({ isActive }) => (
        <Button
          size="small"
          startIcon={icon}
          sx={{
            borderRadius: 10,
            backgroundColor: isActive ? theme.palette.primary.light : "white",
            color: theme.palette.secondary.main
          }}
          variant="outlined"
        >
          {label}
        </Button>
      )}
    </NavLink>
  )
}

const Home: FC = () => {
  const location = useLocation()
  const tag = location.pathname.slice(1)

  return (
    <Box>
      <Stack alignItems="center">
        <Box sx={{ backgroundColor: "white", p: "1rem", width: "70%" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ m: "2rem" }}
          >
            <TopLink icon={<StarBorderIcon />} label="Best" to="/" />
            <TopLink
              icon={<LocalFireDepartmentOutlinedIcon />}
              label="Hot"
              to="/hot"
            />
            <TopLink icon={<AutorenewOutlinedIcon />} label="New" to="/new" />
          </Stack>
        </Box>
      </Stack>
      <Posts tag={tag} />
    </Box>
  )
}

export default Home
