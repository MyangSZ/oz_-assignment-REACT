import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/slice";

export default function FavoriteButton({ pokemonId }) {
  // favorite저장소에 있는지확인하기
  const isFavorite = useSelector((state) =>
    state.favorite.some((item) => item === pokemonId)
  );
  // 상태변경 위해서 디스패치 만들기
  const dispatch = useDispatch();

  return (
    <button
      className={isFavorite ? "text-[#ff69b4]" : ""}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          // 찜버튼(하트모양) 클릭 시 찜목록 추가 또는 삭제
          isFavorite
            ? favoriteSlice.actions.removeFromFavorite({ pokemonId })
            : favoriteSlice.actions.addToFavorite({ pokemonId })
          // 슬라이스js에서  pokemonId를 명시적 선언하여, 객체로 감싸주어서 전달해야 한다.
        );
      }}
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}
