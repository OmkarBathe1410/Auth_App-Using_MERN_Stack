// Slice is just like a piece of state:
import { createSlice } from "@reduxjs/toolkit";


// Initial states at SignIn page:
const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    // Following are the functions through which we change the state of our user:
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        // action = data from the page:
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;