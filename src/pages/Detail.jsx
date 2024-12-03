import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import { useSelector } from "react-redux";
import FavoriteButton from "../component/FavoriteButton";
import FlipCard from "../component/FlipCard";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

  return (
    <div
      className="bg-white flex flex-col justify-center items-center 
    border border-[gray] rounded-[15px] py-[30px] px-[60px]
    border-b-[3px] border-r-[3px] border-gray"
    >
      <div className="text-[30px] mb-[10px]">
        {pokemon.name}
        <FavoriteButton pokemonId={Number(pokemonId)} />
      </div>
      <div className="whitespace-pre-wrap text-center">
        {pokemon.description}
      </div>
      <FlipCard front={pokemon.front} back={pokemon.back} />
    </div>
  );
}
