import { css } from "@emotion/react"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import { Button } from "@mui/material"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import { useTheme } from "@mui/material/styles"
import { FC, ReactNode } from "react"
import { NavLink } from "react-router-dom"

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
            backgroundColor: isActive
              ? theme.palette.primary.light
              : theme.palette.background.default,
            color: isActive
              ? theme.palette.primary.main
              : theme.palette.primary.light
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
  const styles = {
    navContainer: {
      p: { xs: "1rem", sm: "0.5rem", md: "1rem" },
      width: { xs: "100%", md: "80%" },
      marginBottom: { xs: "0rem", sm: "0.5rem", md: "1rem" }
    }
  }

  return (
    <Paper elevation={3} sx={styles.navContainer}>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={{ xs: 0.7, sm: 2, md: 4 }}
        sx={{
          m: { xs: "0rem", md: "2rem" }
        }}
      >
        <TopLink icon={<StarBorderIcon />} label="Top" to="/all/top" />
        <TopLink
          icon={<LocalFireDepartmentOutlinedIcon />}
          label="Popular"
          to="/popular"
        />
        <TopLink icon={<AutorenewOutlinedIcon />} label="New" to="/all/new" />
      </Stack>
    </Paper>
  )
}

export default Navigation
