import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./thunk";

// action, reducer만들기

// 받아올 데이터 정보
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: true,
  },
  // reducers : 동기적 상태 변경할 떄 사용
  reducers: {},
  // extraReducers : 비동기적 상태 변경
  extraReducers: (builder) => {
    // fetchMultiplePokemonById 받아오기
    builder
      // pending : 처리중이면, loading = true
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        state.loading = true;
      })
      // rejected: 처리가 제대로 되지 않았다면, loading = false
      .addCase(fetchMultiplePokemonById.rejected, (state) => {
        state.loading = false;
      })
      // fulfilled: 데이터를 잘 받아 왔다면, data값을 action.payload값으로 들어온 값을 넣어준다.
      // thunk가 성공하면 promise값의 배열을 가져 온다
      .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});
