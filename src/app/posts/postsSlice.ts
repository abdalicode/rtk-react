import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Post {
  title: string;
  content: string;
  commentCount: number;
  id: number;
}
interface PostsSlice {
  posts: Post[];
  count: number;
}

export const getPosts = createAsyncThunk("posts/getPosts", async (thunkApi) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (data) => data.json()
  );
  return res as Post;
});

const initialState: PostsSlice = {
  posts: [{ title: "Apple", content: "green", commentCount: 10, id: 1 }],
  count: 1,
};

export const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        console.log(action);
        console.log(state);
      })
      .addCase(getPosts.pending, (state, action) => {
        console.log("Loading...");
      });
  },
});

export const { increment, decrement, addPost, removePost } = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts;
export default postsSlice.reducer;
