import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import MenuIcon from "@mui/icons-material/Menu"
import { Avatar, Stack } from "@mui/material"
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
import {
  Link,
  Navigate,
  Route,
  Link as RouterLink,
  Routes
} from "react-router-dom"
import { AppBar, DrawerHeader, Main } from "../src/features/Layout/Layout"
import AuthorPage from "./features/AuthorPage/AuthorPage"
import Home from "./features/Home/Home"
import Post from "./features/Post/Post"
import Search from "./features/Search/Search"
import Subreddit from "./features/Subreddit/Subreddit"
import { ThemeSwitcher } from "./features/Utils/ThemeSwitcher"
import logo from "./logo.png"

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
      backgroundColor: theme.palette.background.default,
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
          <ListItem disablePadding>
            <ListItemButton>
              <ThemeSwitcher />
            </ListItemButton>
          </ListItem>

          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/r/javascript"
          >
            <ListItem disablePadding>
              {/* <Link href={post.url} rel="noopener" target="_blank">
                {extractPartUrl(post.url)}
              </Link> */}
              <ListItemButton>
                <ListItemIcon>
                  <Avatar
                    alt="avatar of subreddit"
                    src="https://b.thumbs.redditmedia.com/AltCa25flSy96k0VDTcXUseNPu25FWaInEl1LOvkbqs.png"
                    sx={{ width: 35, height: 35 }}
                  />
                </ListItemIcon>
                <ListItemText primary="My GitHub" />
              </ListItemButton>
            </ListItem>
          </RouterLink>
        </List>
      </Drawer>
    </Box>
  )
}
