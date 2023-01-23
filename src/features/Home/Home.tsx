import { FC } from "react"
import Box from "@mui/material/Box"
import Posts from "../Posts/Posts"

const Home: FC = () => (
    <Box> 
        <Box sx={{ display: 'flex'}}>
            <h1>Popular Now</h1> 
        </Box> 
      <Posts />
    </Box>
)
export default Home

