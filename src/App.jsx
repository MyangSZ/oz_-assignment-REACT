import { lazy, Suspense, useEffect } from "react";
import "./App.scss";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));

function App() {
  // 네이게이터 함수 받아오기/ 서치페이지 이동
  const navigate = useNavigate();
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
        className="border-t-[40px] border-t-[#ff69b4] text-[40px] text-center 
      bg-[#ffc0cb] h-[100px] flex items-center justify-center font-extrabold"
      >
        포켓몬 도감
      </h1>
      <nav
        className="flex gap-[20px] justify-center mt-[20px] text-[20px] font-bold
      py-[10px] border-b border-b-black border-b-[2px]"
      >
        <Link to={"/"}>메인</Link>
        <Link to={"/favorite"}>찜목록</Link>
        <div>
          {/* input 온체인지 이벤트 
          서치페이지 접근시 주소창 쿼리스트링으로 접근 */}
          <input
            onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
            className="border-b border-[drarkgray] w-[120px] px-2"
          />
          <span>🔍</span>
        </div>
      </nav>
      <main
        className="bg-[#F1F0E8] flex flex-wrap justify-center gap-[20px] pt-[20px] text-[20px]
      pb-[30px]"
      >
        <Suspense fallback={<div>... 로딩중!!</div>}>
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/detail/:pokemonId"} element={<Detail />} />
            <Route path={"/search"} element={<Search />} />
            <Route path={"/favorite"} element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
