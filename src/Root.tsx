import * as React from "react"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Toolbar from "@mui/material/Toolbar"
import CssBaseline from "@mui/material/CssBaseline"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import Home from "./features/Home/Home"
import Subreddit from "./features/Subreddit/Subreddit"
import Post from "./features/Post/Post"
import { Suspense } from "react"
import { Route, Routes, Link, Navigate } from "react-router-dom"
import Search from "./features/Search/Search"
import Typography from "@mui/material/Typography"
import logo from "./logo.png"
import { Stack } from "@mui/material"
import { Main, AppBar, DrawerHeader } from "../src/features/Layout/Layout"
import GitHubIcon from "@mui/icons-material/GitHub"
// import Comments from "./features/Comments/Comments"

const drawerWidth = 240

export default function App() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const styles = {
    mainContaner: {
      backgroundColor: theme.palette.secondary.light,
      position: "absolute",
      width: "100%",
      height: "100%",
      overflowY: "auto",
      padding: { xs: "0.5rem" }
    },

    logoTypography: {
      display: {
        xs: "none",
        sm: "block",
        color: theme.palette.primary.main,
        marginLeft: theme.spacing(1)
      }
    },

    drawer: {
      width: { xs: "50%", md: drawerWidth },
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: drawerWidth
      }
    },

    openDrawerButton: {
      // display: { xs: "none", sm: "none", md: "block" },
      display: "block",
      ...(open && { display: "none" })
    }
  }

  return (
    <Box>
      <CssBaseline />
      <AppBar open={open} position="fixed">
        <Toolbar sx={{ display: "flex" }}>
          <Stack alignItems="center" direction="row">
            <Link to="/">
              <img alt="logo" height="50" src={logo} width="50" />
            </Link>
            <Typography noWrap sx={styles.logoTypography} variant="h6">
              <strong>Mini</strong>Reddit
            </Typography>
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            flexGrow="1"
            justifyContent="space-between"
          >
            <Search />
            <IconButton
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={styles.openDrawerButton}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Main open={open} sx={styles.mainContaner}>
        <DrawerHeader />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Home />} path="/all/top" />
            <Route element={<Home />} path="/popular" />
            <Route element={<Home />} path="/all/new" />
            <Route element={<Post />} path="/r/:subreddit/comments/:id" />
            <Route element={<Subreddit />} path="/subreddit/:id" />
            {/* <Route element={<Post />} path="/post/:id" /> */}
            <Route element={<Navigate replace to="/all/top" />} path="/" />
          </Routes>
        </Suspense>
      </Main>
      <Drawer
        anchor="right"
        open={open}
        sx={styles.drawer}
        variant="persistent"
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <Typography>User Settings</Typography>
        </DrawerHeader>
        <Divider />
        <List>
          {["Dark mode", "GitHub", "Visit Reddit", "New"].map((text, index) => (
            <ListItem disablePadding key={text}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <GitHubIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
