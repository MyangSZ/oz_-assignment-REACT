import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";

function App() {
  // 상태 업데이트 하기 위해서 dispatch 해주기
  const dispatch = useDispatch();
  // 전달이 잘 되는지 확인
  const pokemonData = useSelector((state) => state.pokemon);
  console.log(pokemonData);

  useEffect(() => {
    // 만든 thunk함수 사용해 요청보내기
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return <></>;
}

export default App;
