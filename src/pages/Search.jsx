import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectPokemonByRegExp } from "../RTK/selector";
import { Card } from "../component/Card";

export default function Search() {
  // 검색어 받아오기
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  //일치하는 문자열 패턴이 있는지 검사할 수 있는 정규식생성
  const reg = getRegExp(param);

  // 정규식을 받아와서 일치하는
  const pokemon = useSelector(selectPokemonByRegExp(reg));
  console.log(pokemon);

  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
