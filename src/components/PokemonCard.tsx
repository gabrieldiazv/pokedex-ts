import { getTypeColor } from "../utils/getTypeColor";
import { getTypeCardBg } from "../utils/getTypeCardBg";
import { PokemonDetails } from "../types/pokemon";
import { useNavigate, useLocation } from "react-router-dom";

interface PokemonCardProps {
  pokemon: PokemonDetails;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const mainType = pokemon.types[0]?.type.name ?? "normal";

  return (
    <div
      onClick={() =>
        navigate(`/pokemon/${pokemon.id}`, {
          state: { from: location.pathname + location.search },
        })
      }
      className={`p-4 rounded-xl text-center shadow-md hover:scale-105 transition-transform relative text-white ${getTypeCardBg(
        mainType
      )}`}
    >
      {/* Número */}
      <span className="absolute top-2 left-2 text-sm text-white/70 font-mono">
        #{pokemon.id.toString().padStart(3, "0")}
      </span>

      {/* Imagen */}
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto h-24 sm:h-28 md:h-32 drop-shadow-md"
      />

      {/* Nombre */}
      <h2 className="capitalize mt-2 font-extrabold text-lg sm:text-xl tracking-wide">
        {pokemon.name}
      </h2>

      {/* Tipos */}
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {pokemon.types.map((t, i) => (
          <span
            key={i}
            className={`inline-flex items-center justify-center px-2 py-[2px] rounded-full text-[0.7rem] leading-none font-medium transition-all duration-200 hover:scale-105 hover:shadow-md ${getTypeColor(
              t.type.name
            )}`}
          >
            {t.type.name}
          </span>
        ))}
      </div>

      {/* Habilidades */}
      <div className="flex flex-wrap justify-center gap-1 mt-3">
        {pokemon.abilities.map((a, i) => (
          <span
            key={i}
            className={`inline-flex items-center justify-center px-2 py-[2px] text-[0.7rem] leading-none rounded-full transition-all duration-200 hover:scale-105 hover:shadow-md ${
              a.is_hidden
                ? "bg-yellow-500/50 text-white"
                : "bg-white/20 text-white"
            }`}
          >
            {a.ability.name}
            {a.is_hidden && " (oculta)"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
