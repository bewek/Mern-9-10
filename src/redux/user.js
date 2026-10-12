import { createSlice } from "@reduxjs/toolkit";
import {
  addUser,
  deleteUser,
  fetchUserById,
  fetchUsers,
  updateUser,
} from "./actions";
// ----------------------------------------------------------------
// Slice: the state + how it changes in response to the thunks above
// ----------------------------------------------------------------

const initialState = {
  users: [], // full list, used on the User page
  currentUser: null, // single user, used on the Edit page
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      // fetchUsers
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // fetchUserById
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })

      // addUser -> push the new user straight into the list
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })

      // updateUser -> replace the old version in the list with the new one
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })

      // deleteUser -> remove the deleted user from the list
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((u) => u.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
