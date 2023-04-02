import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../types';

const initialState: AppState = {
  count:0
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    fetchUser: ()=> undefined,
    setUser: (state, action)=>{
      state.user = action.payload;
    },
    ping: (state, action) => {
          state.count = action.payload
    },
    pong: () => {},
    endGame: (state, action) => {
      console.log(JSON.stringify(action.payload));
    },
    countUp: (state) => {
      console.log(222);

      state.count += 1;
    },
    countDown: (state) =>  {
      state.count -= 1
    },
  },
});

export const { ping, pong, endGame, countUp, countDown, fetchUser, setUser } = appSlice.actions;

