import React, { FC, useState } from "react"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Theme, useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import SearchIcon from "@mui/icons-material/Search"
import CloseIcon from "@mui/icons-material/Close"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"

const getStyles = (theme: Theme) => ({
  search: css({
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: 20
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        // - Set the Input border when parent is focused
        borderColor: "grey"
      }
    }
  })
})

const SearchBar: FC = () => {
  const theme = useTheme()
  const styles = getStyles(theme)

  console.log(theme)

  // State to store value from the input field
  const [inputValue, setInputValue] = useState("")

  // Input Field handler
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  // Reset Input Field handler
  const resetInputField = () => {
    setInputValue("")
  }

  return (
    <Box
      sx={{
        display: "flex",
        marginLeft: theme.spacing(5)
      }}
    >
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "action.active" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <CloseIcon onClick={resetInputField} />
            </InputAdornment>
          )
        }}
        className="search"
        css={styles.search}
        id="outlined-adornment"
        onChange={handleUserInput}
        placeholder="Search"
        size="small"
        value={inputValue}
        variant="outlined"
      />
    </Box>
  )
}

export default SearchBar
