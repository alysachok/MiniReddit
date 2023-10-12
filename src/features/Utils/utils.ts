import { SerializedError } from "@reduxjs/toolkit"
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query"

interface Post {
  id: number
  title: string
  tags: any[]
  image: string
}

const posts: Post[] = [
  {
    id: 0,
    title: "Funny",
    tags: ["new"],
    image:
      "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
  },
  {
    id: 1,
    title: "Auto",
    tags: ["hot"],
    image:
      "https://media.gettyimages.com/id/157373207/photo/balanced-stones-on-a-pebble-beach-during-sunset.jpg?s=612x612&w=gi&k=20&c=o2EIbVkoOYim9J_rHm0YUic16Sl42MuKgS9GOOH6_xU="
  },
  {
    id: 2,
    title: "Nails",
    tags: ["new"],
    image:
      "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
  },
  {
    id: 3,
    title: "News",
    tags: ["best", "hot", "new"],
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
  },
  {
    id: 4,
    title: "Popular",
    tags: ["best", "hot", "new"],
    image:
      "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png"
  }
]

export const extractPartUrl = (url: string) => {
  // Extracting the domain (e.g., "www.example.com")
  const domainMatch = url.match(
    /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/i
  )
  const domain = domainMatch ? domainMatch[1] : ""

  return `${domain} ...`
}

export const formatTimeAgo = (dateUtc: number) => {
  const now = new Date() // Current date and time
  const createdUtcTimestamp = dateUtc * 1000 // Convert to milliseconds
  const date = new Date(createdUtcTimestamp) // Convert the UTC date to a Date object

  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (secondsAgo < 60) {
    return `${secondsAgo} seconds ago`
  } else if (secondsAgo < 3600) {
    const minutesAgo = Math.floor(secondsAgo / 60)

    return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`
  } else if (secondsAgo < 86400) {
    const hoursAgo = Math.floor(secondsAgo / 3600)

    return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`
  } else {
    const daysAgo = Math.floor(secondsAgo / 86400)

    // Calculate years and months
    const yearsAgo = Math.floor(daysAgo / 365)
    const monthsAgo = Math.floor((daysAgo % 365) / 30) // Roughly 30 days per month

    if (yearsAgo > 0) {
      return `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`
    } else if (monthsAgo > 0) {
      return `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`
    } else {
      return `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`
    }
  }
}

export const formatTime = (dateUtc: number) => {
  const createdUtcTimestamp = dateUtc * 1000 // Convert to milliseconds
  const formattedDate = new Date(createdUtcTimestamp).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  )

  return formattedDate
}

export const formatNumber = (value: number | undefined): string => {
  if (value === undefined || value === null) {
    return "vote" // Or any other default value you prefer
  }

  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + "m" // Format as million
  }

  if (value >= 1000) {
    return (value / 1000).toFixed(1) + "k" // Format as thousand
  }

  return value.toString() // No formatting needed for smaller numbers
}

export default posts

export const parseErrorMessage = (
  error: FetchBaseQueryError | SerializedError | undefined
) => {
  let errorMessage = ""

  if (error) {
    const fetchBaseQueryError = error as FetchBaseQueryError

    if (fetchBaseQueryError.status) {
      if (typeof fetchBaseQueryError.status === "number") {
        errorMessage = "Unknown Error"
      } else {
        errorMessage = fetchBaseQueryError.error
      }
    } else {
      errorMessage = (error as SerializedError).message ?? "Serialized Error"
    }
  }

  return errorMessage
}
