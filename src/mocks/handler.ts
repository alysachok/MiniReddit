// import { http } from "msw"

// http.get(
//   "https://www.reddit.com/api/info.json?id=t3_17vflm8",
//   async ({ request }) => {
//     const post = await request.json()

//     console.log("post:", post)
//     // const mockResponse = {
//     //   data: {
//     //     children: [
//     //       {
//     //         data: {
//     //           id: "123",
//     //           title: "My post title",
//     //           author: "My post author",
//     //           created_utc: 1700004624,
//     //           subreddit_name_prefixed: "r/cat",
//     //           subreddit: "cat",
//     //           score: 41587,
//     //           num_comments: 396,
//     //           thumbnail:
//     //             "https://b.thumbs.redditmedia.com/tQ75QsuQhdBE1DqraQ8ZSLhinG79392xJQRfttL4Smc.jpg",
//     //           url: "https://v.redd.it/64kvdi0iee0c1",
//     //           upvote_ratio: 0.96,
//     //           permalink:
//     //             "/r/aww/comments/17vflm8/recently_adopted_a_kitten_was_worried_he_wouldnt/",
//     //           is_video: true
//     //         }
//     //       }
//     //       // ... more mock posts
//     //     ]
//     //   }
//     // }

//     // return new Response(JSON.stringify(mockResponse), {
//     //   headers: { "Content-Type": "application/json" }
//     // })
//   }
// )

import { http, HttpResponse } from "msw"

export const handler = [
  http.get(
    "https://www.reddit.com/api/info.json?id=t3_17vflm8",
    () => new HttpResponse("John")
  )
]
