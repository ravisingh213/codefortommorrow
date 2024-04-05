import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postList: (state, action) => {
      state.posts = action.payload;
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    }
  }
})

// Action creators are generated for each case reducer function
export const { postList, removePost } = postSlice.actions

export default postSlice.reducer   