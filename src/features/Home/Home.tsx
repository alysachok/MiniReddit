import { FC } from "react"
import Box from "@mui/material/Box"
import Posts from "../Posts/Posts"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined"
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"

const handleClick = () => {
  console.info("You clicked the Chip.")
}

const Home: FC = () => (
  <Box>
    <Box sx={{ backgroundColor: "white", p: "1rem" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        margin="2rem"
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Chip
          icon={<StarBorderOutlinedIcon />}
          label="BEST"
          onClick={handleClick}
        />
        <Chip
          icon={<LocalFireDepartmentOutlinedIcon />}
          label="HOT"
          onClick={handleClick}
          variant="outlined"
        />
        <Chip
          icon={<AutorenewOutlinedIcon />}
          label="NEW"
          onClick={handleClick}
          variant="outlined"
        />
      </Stack>
    </Box>
    <Posts />
  </Box>
)

export default Home
