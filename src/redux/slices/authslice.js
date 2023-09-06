import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig';

const initialState = {
    loading: false,
    error: '',
    userAuth: null
}

export const login = createAsyncThunk('login', async ({email, pwd}, thunk) => {
    const { rejectWithValue } = thunk;
    try { await signInWithEmailAndPassword(auth, email, pwd)
    //    .then(userCredential => {
    //      console.log(userCredential);
    //   })

    } catch (error) {
        return rejectWithValue('error... login');
    }
})

export const logOut = createAsyncThunk('logOut', async (_, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        await signOut(auth)
        // .then(_ => { console.log("signed out");  })

    } catch (error) {
        return rejectWithValue('error... logout');
    }
})


export const authslice = createSlice({
    name: 'authslice',
    initialState,
    reducers: {},
    extraReducers : builder => {
        builder.addCase(login.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.userAuth = auth;
        })

        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // sign out 
        builder.addCase(logOut.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(logOut.fulfilled, state => {
            state.loading = false;
            state.userAuth = false;
        })

        builder.addCase(logOut.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }
  })
  
  export default authslice.reducer