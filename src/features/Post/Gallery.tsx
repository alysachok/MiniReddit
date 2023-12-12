import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded"
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded"
import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import React, { useState } from "react"

interface Photo {
  id: string
  url: string
  caption?: string
}

interface GalleryProps {
  photos: Photo[]
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const theme = useTheme()

  const goToNextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const goToPreviousPhoto = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    )
  }

  const currentPhotoNumber = currentIndex + 1
  const totalPhotos = photos.length

  // TODO: put all these inside one object "styles"
  const galleryContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: { xs: theme.spacing(50), md: theme.spacing(100) },
    width: "100%",
    backgroundColor: "white",
    overflow: "hidden"
  }

  const imageContaner = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%"
  }

  const navigationButtonContaner = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    margin: { xs: "0.5rem", sm: "0.5rem", md: "5rem" }
  }

  const navigationButtonStyle = {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.main,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    height: { xs: "20px", sm: "30px", md: "50px" },
    width: { xs: "20px", sm: "30px", md: "50px" }
  }

  const counterStyle = {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.main,
    fontSize: { xs: "0.5rem", sm: "1rem", md: "1.5rem" },
    padding: { xs: "0.3rem", sm: "0.3rem", md: "0.7rem" },
    borderRadius: "25%"
  }

  return (
    <Box sx={galleryContainerStyle}>
      <Box sx={navigationButtonContaner}>
        <Box height="48%" />
        {currentIndex !== 0 && (
          <NavigateBeforeRoundedIcon
            onClick={goToPreviousPhoto}
            sx={navigationButtonStyle}
          />
        )}
      </Box>
      <Box sx={imageContaner}>
        <img alt="Gallery" src={photos[currentIndex].url} style={imageStyle} />
      </Box>
      <Box sx={navigationButtonContaner}>
        <Box height="48%">
          <Box sx={counterStyle}>{`${currentPhotoNumber}/${totalPhotos}`}</Box>
        </Box>

        {/* NEXT */}
        {currentIndex !== totalPhotos - 1 && (
          <NavigateNextRoundedIcon
            onClick={goToNextPhoto}
            sx={navigationButtonStyle}
          />
        )}
      </Box>
    </Box>
  )
}

export default Gallery
