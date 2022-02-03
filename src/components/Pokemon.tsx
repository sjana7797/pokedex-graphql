import { Pokemon } from "../utils/interface";
import { defineTypes } from "../utils/helperFunctions";

function PokemonContainer({ pokemon }: { pokemon: Pokemon }) {
  // const bgColor = defineTypes(pokemon.types[0]);
  return (
    <div className="bg-white pb-5 max-w-xs flex flex-col items-center shadow-md shadow-slate-300 rounded-md border border-slate-200 cursor-pointer hover:scale-110 transform transition-transform duration-300">
      <h2 className="bg-indigo-600 w-full rounded-t-md text-center text-lg text-white font-bold tracking-wider">
        {pokemon.number} {pokemon.name}
      </h2>
      <img
        src={pokemon.image}
        className="w-52 h-52 object-contain rounded px-5 py-2"
        alt={pokemon.name}
      />
      <div className="w-full flex items-center justify-evenly px-5 mt-5 space-x-5">
        {pokemon.types.map((type) => (
          <p
            className={`${defineTypes(
              type
            )} px-2 py-1 rounded-md text-white font-semibold shadow-slate-300 shadow-md w-20 text-center`}
          >
            {type}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PokemonContainer;
