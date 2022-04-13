import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  token: null,
  profileImage: null,
  isLogged: false,
  birthday: null,
  accountCreatedAt: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }: any) {
      state.id = payload.user.id;
      state.email = payload.user.email;
      state.firstName = payload.user.firstName;
      state.lastName = payload.user.lastName;
      state.token = payload.accessToken;
      state.profileImage = payload.user.profileImage;
      state.isLogged = true;
      state.birthday = payload.user.birthday;
      state.accountCreatedAt = payload.user.accountCreatedAt;
    },
    logout: () => initialState,
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
