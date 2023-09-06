import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  loading: false,
  error: '',
  posts:[],
  post:null
}

export const allPosts = createAsyncThunk('allPosts', async (_, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(URL)
        return data

    } catch (error) {
        return rejectWithValue('There is an error... getting posts');
    }
})

export const onePost = createAsyncThunk('onePost', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`${URL}/${id}`);
        return data
    } catch (error) {
        return rejectWithValue('ERROR!...in one post')
    }
})

export const addPost = createAsyncThunk('addPost', async (post, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.post(URL, post);
        return data
    } catch (error) {
        return rejectWithValue('ERROR!... in add post')
    }
})

export const updatePost = createAsyncThunk('updatePost', async ({id, obj}, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.put(`${URL}/${id}`, obj);
        return data
    } catch (error) {
        return rejectWithValue('ERROR!...in update post')
    }
})

export const deletePost = createAsyncThunk('deletePost', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        await axios.delete(`${URL}/${id}`);
        return id
    } catch (error) {
        return rejectWithValue('ERROR!...in delete post')
    }
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // all posts
        builder.addCase(allPosts.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(allPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        })

        builder.addCase(allPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // one posts
        builder.addCase(onePost.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(onePost.fulfilled, (state, action) => {
            state.loading = false;
            state.post = action.payload;
        })

        builder.addCase(onePost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // add post
        builder.addCase(addPost.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(addPost.fulfilled, (state, action) => {
            state.loading = false;
            state.posts.push(action.payload)
        })

        builder.addCase(addPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // update post
        builder.addCase(updatePost.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(updatePost.fulfilled, (state, action) => {
            state.loading = false;
            state.post = action.payload;
            console.log(state.post);
        })

        builder.addCase(updatePost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // deletePost
        builder.addCase(deletePost.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(deletePost.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = state.posts.filter(post => post.id !== action.payload);
            console.log("done delete");
        })

        builder.addCase(deletePost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})


export default postsSlice.reducer

  