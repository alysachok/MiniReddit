import { configureStore } from "@reduxjs/toolkit"
// import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { redditApi } from "../api/apiSlice"

export const store = configureStore({
  reducer: {
    [redditApi.reducerPath]: redditApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(redditApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >
