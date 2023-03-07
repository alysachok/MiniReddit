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

export default posts
