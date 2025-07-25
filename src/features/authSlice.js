import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  return null;
};

const initialState = {
  user: getUserFromLocalStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
    logoutUser: (state) => {
      state.user = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        localStorage.removeItem("token"); // jodi token store koro
      }
    },
    loadUserFromStorage: (state) => {
      state.user = getUserFromLocalStorage();
    },
  },
});

export const { setUser, logoutUser, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;
