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

// favorite 슬라이스. 찜목록 아이디만 담아두고 관리하는 스토어
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [1, 2, 3],
  reducers: {
    // 찜목록 추가
    addToFavorite(state, action) {
      state.push(action.payload.pokemonId);
      // 리덕스툴킷은 이머라는 도구 내장. 참조자료형 건들여도 불변성을 유지해서 상태업데이트 잘됨
      // 이럴때는 리턴하지 않고 상태를 변화시키기만 해도 상태업데이트가 된다.
    },
    // 찜목록 삭제
    removeFromFavorite(state, action) {
      // 배열에서 특정 요소 뺴기 위해 스플라이스 사용(인텍스값을 받아서 사용)
      // 인덱스 위치 찾기 (indexOf)
      const index = state.indexOf(action.payload.pokemonId);
      // 만약 인텍스 값이 일치 하지 않으면 제거한다.
      if (index !== -1) state.splice(index, 1);
    },
  },
});
