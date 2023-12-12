import ClearIcon from "@mui/icons-material/Clear"
import SearchIcon from "@mui/icons-material/Search"
import { Box, useTheme } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import TextField from "@mui/material/TextField"
import { ChangeEvent, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()

  const styles = {
    mainContaner: {
      backgroundColor: theme.palette.background.paper
    }
  }

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/r/${searchTerm}`)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleClear = () => {
    setSearchTerm("")
  }

  useEffect(() => {
    const pathSubreddit = location.pathname.split("/")[2]

    if (pathSubreddit === searchTerm) {
      setSearchTerm(searchTerm)
    } else {
      setSearchTerm("")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <Box sx={styles.mainContaner}>
      <TextField
        InputProps={{
          startAdornment: (
            <IconButton
              onClick={handleSearch}
              size="small"
              sx={{ cursor: "pointer", p: "0.1rem" }}
            >
              <SearchIcon />
            </IconButton>
          ),
          endAdornment: searchTerm && (
            <IconButton
              onClick={handleClear}
              size="small"
              sx={{ cursor: "pointer" }}
            >
              <ClearIcon />
            </IconButton>
          )
        }}
        fullWidth
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        size="small"
        sx={{ borderRadius: "1rem" }}
        value={searchTerm}
        variant="outlined"
      />
    </Box>
  )
}

export default SearchBar
