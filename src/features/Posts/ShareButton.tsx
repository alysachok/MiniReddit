import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import { IconButton, Tooltip, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import React from "react"

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
          marginLeft: "0.4rem",
          color: theme.palette.primary.main
        }}
      >
        <ShareOutlinedIcon />
        <Typography fontSize="0.9rem" marginLeft="0.4rem">
          Share
        </Typography>
      </IconButton>
    </Tooltip>
  )
}

export default ShareButton
