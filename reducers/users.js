import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    token: null,
    username: null,
    email: null,
    profil: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.email = action.payload.email;
      state.value.profil.push(action.payload);
    },
    logout: (state) => {
      state.value.profil = [];
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
