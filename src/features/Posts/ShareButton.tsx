import React from "react"
import { IconButton, Tooltip, Typography } from "@mui/material"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import { useTheme } from "@mui/material/styles"

interface ShareButtonProps {
  link: string
}

const ShareButton: React.FC<ShareButtonProps> = ({ link }) => {
  const theme = useTheme()

  const handleCopyLink = () => {
    const postURL = `https://www.reddit.com${link}`

    navigator.clipboard.writeText(postURL).catch((error) => {
      console.error("Failed to copy link: ", error)
    })
  }

  return (
    <Tooltip placement="right" title="Copy">
      <IconButton
        onClick={handleCopyLink}
        size="small"
        sx={{
          borderRadius: "4px",
          color: theme.palette.primary.main
        }}
      >
        <ShareOutlinedIcon />
        <Typography>Share</Typography>
      </IconButton>
    </Tooltip>
  )
}

export default ShareButton
