import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const redditApi = createApi({
  reducerPath: "redditApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.reddit.com/" }),
  endpoints: (builder) => ({
    getPostsBySubreddit: builder.query({
      query: (subreddit: string) => `r/${subreddit}.json`
    }),
    getPostsByAuthor: builder.query({
      query: (author: string) => `user/${author}/submitted.json`
    }),
    getPostById: builder.query({
      query: (id: string) => `api/info.json?id=t3_${id}`
    }),
    getComments: builder.query({
      query: (args: { subreddit: string; id: string }) => {
        const { subreddit, id } = args

        return `r/${subreddit ?? ""}/comments/${id ?? ""}.json`
      }
    }),
    getSubreddit: builder.query({
      query: (subreddit: string) => `r/${subreddit}/about.json`
    }),
    getAuthorInfo: builder.query({
      query: (author: string) => `user/${author}/about.json`
    })
  })
})

export const {
  useGetPostsBySubredditQuery,
  useGetCommentsQuery,
  useGetSubredditQuery,
  useGetPostByIdQuery,
  useGetPostsByAuthorQuery,
  useGetAuthorInfoQuery
} = redditApi
