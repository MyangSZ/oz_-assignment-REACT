import { createAsyncThunk } from "@reduxjs/toolkit";

// createAsyncThunk는 async함수를 바로 받을 수 있다.

export const fetchMultiplePokemonById = createAsyncThunk(
  "pokemon/fetchMultiplePokemonById",
  async (maxPokemonId) => {
    // 배열 만들기(1~151번까지)
    const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1);
    // console.log(numberArray);

    const fetchAPI = async (pokemonId) => {
      // fetch 사용. 요청 보내기
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
      );
      // 돌아온 요청의 json형태를 읽을 수 있는 js형태로 바꿔주기 위해 data로 받아오기
      const data = await response.json();
      // 데이터에서 names배열 꺼내 요소중 laguage의 이름이 ko인것 찾기

      // 객체 만들기
      const pokemonData = {
        id: pokemonId,
        name: data.names.find((el) => el.language.name === "ko").name,
        description: data.flavor_text_entries.find(
          (el) => el.language.name === "ko"
        ),
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
      };
      // Promise.all의 리턴하는 결과 값의 배열 안에 pokemonDatas가 최종 리턴되도록
      return pokemonData;
    };

    // useEffect에 전달하는 함수는 async를 넣어 줄수 없다.
    // async는 항상 promise를 리턴하는 함수
    // useEffect의 콜백함수가 클린업 함수를 리턴할 수 없다.
    //   const fetchPokemonDatas = async () => {
    // Promise를 사용하기. 데이터 배열로 받아오기
    // 배열안의 숫자들을 promise로 변환
    // const pokemonDatas = await Promise.all(numberArray.map((el) => fetchAPI(el)));
    // return pokemonDatas;

    // async를 바로 받아 올수 있기 때문에 바로 풀어서 받아오기
    return await Promise.all(numberArray.map((el) => fetchAPI(el)));
  }

  //   return fetchPokemonDatas();
);
