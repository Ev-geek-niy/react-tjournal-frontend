import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseUser } from "../../utils/api/types";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

export interface UserState {
  data: ResponseUser;
}

const initialState: UserState = {
  data: null,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<ResponseUser>) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      };
    },
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user.data;

export const userReducer = userSlice.reducer;
