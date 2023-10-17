import { Box, Button, CircularProgress, Stack, Typography } from "@mui/material"
import { SerializedError } from "@reduxjs/toolkit"
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query"
import { FC, PropsWithChildren } from "react"
import { parseErrorMessage } from "./utils"

interface WithLoadingProps {
  error: FetchBaseQueryError | SerializedError | undefined
  isFetching: boolean
  onRetry: () => void
}

const WithLoading: FC<PropsWithChildren<WithLoadingProps>> = ({
  error,
  isFetching,
  onRetry,
  children
}) => {
  const errorMessage = parseErrorMessage(error)

  if (isFetching) {
    return (
      <Box
        alignItems="center" // Center vertically
        display="flex"
        height="100vh" // 100% of the viewport height
        justifyContent="center" // Center horizontally
        left="0"
        padding="0px"
        // position="absolute"
        top="0"
        width="100vw" // 100% of the viewport width
      >
        <Stack alignItems="center" direction="row" spacing={1}>
          <CircularProgress size="1rem" />
          <Typography variant="h6">Loading...</Typography>
        </Stack>
      </Box>
    )
  }

  if (error) {
    return (
      <Stack
        alignItems="center"
        height="100vh" // 100% of the viewport height
        justifyContent="center" // Center horizontally
        left="0"
        padding="0px"
        position="fixed"
        top="0"
        width="100vw"
      >
        <p>Error: {errorMessage}</p>
        <Button onClick={onRetry}>Retry</Button>
      </Stack>
    )
  }

  return <>{children}</>
}

export default WithLoading
