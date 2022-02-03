import { useQuery } from "@apollo/client";
import PokemonContainer from "./Pokemon";
import { Pokemon } from "../utils/interface";
import { GET_POKEMONS } from "../graphql/get-pokemon";

function PokemonsContainer() {
  const { data } = useQuery<{ pokemons: Pokemon[] } | undefined>(GET_POKEMONS, {
    variables: { first: 151 },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl my-10">
      {data?.pokemons ? (
        data.pokemons.map((pokemon: Pokemon) => {
          return <PokemonContainer pokemon={pokemon} key={pokemon.number} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default PokemonsContainer;
