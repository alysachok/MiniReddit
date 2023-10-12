import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import GitHubIcon from "@mui/icons-material/GitHub"
import MenuIcon from "@mui/icons-material/Menu"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import { Stack } from "@mui/material"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import * as React from "react"
import { Suspense } from "react"
import { Link, Navigate, Route, Routes } from "react-router-dom"
import { AppBar, DrawerHeader, Main } from "../src/features/Layout/Layout"
import AuthorPage from "./features/AuthorPage/AuthorPage"
import Home from "./features/Home/Home"
import Post from "./features/Post/Post"
import Search from "./features/Search/Search"
import Subreddit from "./features/Subreddit/Subreddit"
import logo from "./logo.png"
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
            <Route element={<Subreddit />} path="/r/:subreddit" />
            <Route element={<AuthorPage />} path="/user/:author" />
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
