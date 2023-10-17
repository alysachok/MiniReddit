// import Box from "@mui/material/Box"
import { Avatar } from "@mui/material"
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
      <nav aria-label="main">
        <List>
          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/r/askreddit"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar
                    alt="avatar of subreddit"
                    src="https://b.thumbs.redditmedia.com/LSHrisQApf1H5F8nWShTx3_KjTOMc3R_ss3kx3XAyXQ.png"
                    sx={{ width: 35, height: 35 }}
                  />
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
                  <Avatar
                    alt="avatar of subreddit"
                    src="https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png"
                    sx={{ width: 35, height: 35 }}
                  />
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
                  <Avatar
                    alt="avatar of subreddit"
                    src="https://b.thumbs.redditmedia.com/AltCa25flSy96k0VDTcXUseNPu25FWaInEl1LOvkbqs.png"
                    sx={{ width: 35, height: 35 }}
                  />
                </ListItemIcon>
                <ListItemText primary="GitHub" />
              </ListItemButton>
            </ListItem>
          </RouterLink>

          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/r/ChatGPT"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar
                    alt="avatar of subreddit"
                    src="https://b.thumbs.redditmedia.com/cWRMZxSh_E3NBa5dfAIWqjy_-qKWxYzs422l79Aj7HI.png"
                    sx={{ width: 35, height: 35 }}
                  />
                </ListItemIcon>
                <ListItemText primary="Chat GPT" />
              </ListItemButton>
            </ListItem>
          </RouterLink>

          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/r/ProgrammerHumor"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar
                    alt="avatar of subreddit"
                    src="https://b.thumbs.redditmedia.com/DI5tO-0DYsiHrXIn7lPGbtYWVxosoTsUsHtXrzSWGgI.png"
                    sx={{ width: 35, height: 35 }}
                  />
                </ListItemIcon>
                <ListItemText primary="ProgrammerHumor" />
              </ListItemButton>
            </ListItem>
          </RouterLink>

          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/r/react"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar
                    alt="avatar of subreddit"
                    src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&s=3f7493995143d3cf40b1fedc582607cea194b579"
                    sx={{ width: 35, height: 35 }}
                  />
                </ListItemIcon>
                <ListItemText primary="React" />
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
                  <Avatar
                    alt="avatar of subreddit"
                    src="https://b.thumbs.redditmedia.com/8RJ1zsSxLbTrSrRAhziwMynfkWVcuFNMXPsLqtGct1o.png"
                    sx={{ width: 35, height: 35 }}
                  />
                </ListItemIcon>
                <ListItemText primary="Node" />
              </ListItemButton>
            </ListItem>
          </RouterLink>

          <RouterLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/r/developer"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar
                    alt="avatar of subreddit"
                    src="https://b.thumbs.redditmedia.com/D5Q0dxByu36Ova2tGun4Xcqek5BeLat7Lv8D8oAsnWQ.png"
                    sx={{ width: 35, height: 35 }}
                  />
                </ListItemIcon>
                <ListItemText primary="Developer" />
              </ListItemButton>
            </ListItem>
          </RouterLink>
        </List>
      </nav>
    </Box>
  )
}
