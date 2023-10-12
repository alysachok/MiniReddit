// import Box from "@mui/material/Box"
import DraftsIcon from "@mui/icons-material/Drafts"
import InboxIcon from "@mui/icons-material/Inbox"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { Link as RouterLink } from "react-router-dom"

export default function BasicList() {
  return (
    <Box>
      <nav aria-label="main mailbox folders">
        <List>
          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/r/askreddit"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="AskReddit" />
              </ListItemButton>
            </ListItem>
          </RouterLink>

          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/r/javascript"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="JavaScript" />
              </ListItemButton>
            </ListItem>
          </RouterLink>

          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/r/github"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="GitHub" />
              </ListItemButton>
            </ListItem>
          </RouterLink>

          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/r/gpt"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Chat GPT" />
              </ListItemButton>
            </ListItem>
          </RouterLink>

          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/r/css"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="CSS" />
              </ListItemButton>
            </ListItem>
          </RouterLink>

          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/r/reactjs"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="ReactJS" />
              </ListItemButton>
            </ListItem>
          </RouterLink>

          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/r/learnprogramming"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Learn Programming" />
              </ListItemButton>
            </ListItem>
          </RouterLink>

          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/r/node"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Node" />
              </ListItemButton>
            </ListItem>
          </RouterLink>
        </List>
      </nav>
    </Box>
  )
}
