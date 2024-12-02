import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./slice";

// 스토어 만들기
export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
    // 포켓몬 관리하는 리듀서로 포켓몬 슬라이스에서 리듀서를 꺼내와서 쓴다.
  },
});
