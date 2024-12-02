import { useEffect } from "react";
import "./App.scss";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { Link, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";

function App() {
  // 상태 업데이트 하기 위해서 dispatch 해주기
  const dispatch = useDispatch();
  // 전달이 잘 되는지 확인

  useEffect(() => {
    // 만든 thunk함수 사용해 요청보내기
    dispatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <h1
        className="text-[40px] text-center 
      bg-[#ffc0cb] h-[100px] flex items-center justify-center font-extrabold"
      >
        포켓몬 도감
      </h1>
      <nav className="flex gap-[15px] justify-center mt-[20px] text-[20px] font-bold">
        <Link to={"/"}>메인</Link>
        <Link to={"/detail/1"}>상세정보</Link>
        <Link to={"/search"}>검색</Link>
        <Link to={"/favorite"}>찜목록</Link>
      </nav>
      <main className="flex flex-wrap justify-center gap-[20px] pt-[20px]">
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/detail/:pokemonId"} element={<Detail />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/favorite"} element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
