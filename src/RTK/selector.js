import { createSelector } from "@reduxjs/toolkit";

// id 일치하는 것만 가져오기
export const selectPokemonById = (pokemonId) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.find((el) => el.id === pokemonId)
  );

// 정규식(reg) 입력.검색 이름이 입력받은 정규식과 일치하는 데이터만 가져오기
export const selectPokemonByRegExp = (reg) =>
  createSelector(
    (state) => state.pokemon.data, // 포켓몬 전체 데이터 중에서
    (pokemon) => pokemon.filter((el) => el.name.match(reg))
    // 포켓몬의 이름이 입력받은 정규식과 일치하는 데이터만 찾아서 리턴
  );

// 찜목록
// 전체데이터, 찜데이터 조합해서 찜한 데이터만 불러오기
export const selectFavoritePokemons = createSelector(
  // 상태 두개: 포켓몬 전체데이터, 찜목록에 대한 상태
  (state) => state.pokemon.data,
  (state) => state.favorite,
  (pokemon, favorite) => {
    // 전체 포켓몬 중에서 ㅈfavorite안에 잇는 것만 리턴
    return pokemon.filter((el) => favorite.includes(el.id));
  }
);
