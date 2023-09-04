import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/comments';

const initialState = {
  loading: false,
  error: '',
  comments:[],
  comment:null
}

export const allComments = createAsyncThunk('allComments', async (_, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(URL)
        return data

    } catch (error) {
        return rejectWithValue('There is an error in all comments!');
    }
})

export const addComment = createAsyncThunk('addComment', async (comment, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.post(URL, comment);
        return data
    } catch (error) {
        return rejectWithValue('ERROR!... in add comment')
    }
})

export const updateComment = createAsyncThunk('updateComment', async ({id, obj}, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.put(`${URL}/${id}`, obj);
        return data
    } catch (error) {
        return rejectWithValue('ERROR!...in update comment')
    }
})

export const deleteComment = createAsyncThunk('deleteComment', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        await axios.delete(`${URL}/${id}`);
        return id
    } catch (error) {
        return rejectWithValue('ERROR!...in delete comment')
    }
})

export const oneComment = createAsyncThunk('oneComment', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`${URL}/${id}`);
        return data
    } catch (error) {
        return rejectWithValue('ERROR!...in one comment')
    }
})

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(allComments.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(allComments.fulfilled, (state, action) => {
            state.loading = false;
            state.comments = action.payload;
        })

        builder.addCase(allComments.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // add post
        builder.addCase(addComment.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(addComment.fulfilled, (state, action) => {
            state.loading = false;
            state.comments.push(action.payload)
        })

        builder.addCase(addComment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // update comment
        builder.addCase(updateComment.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(updateComment.fulfilled, (state, action) => {
            state.loading = false;
            state.comment = action.payload;
            // console.log("done update");
        })

        builder.addCase(updateComment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // delete comment
        builder.addCase(deleteComment.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(deleteComment.fulfilled, (state, action) => {
            state.loading = false;
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
            console.log("delete comment");
        })

        builder.addCase(deleteComment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // one comment
        builder.addCase(oneComment.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(oneComment.fulfilled, (state, action) => {
            state.loading = false;
            state.comment = action.payload;
        })

        builder.addCase(oneComment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})


export default commentsSlice.reducer

  