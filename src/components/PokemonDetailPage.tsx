import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import { getTypeColor } from '../utils/getTypeColor';
import { useState } from 'react';

const PokemonDetailPage = () => {
  const location = useLocation();
  const from = location.state?.from || '/';
  const handleBack = () => {
    navigate(from);
  };

  const { id } = useParams<{ id: string }>();
  const { data: pokemon, isLoading, error } = usePokemonDetails(Number(id));
  const navigate = useNavigate();
  const [shiny, setShiny] = useState(false);

  if (isLoading) return <p className="text-center text-white">Cargando...</p>;
  if (error || !pokemon) return <p className="text-center text-red-400">Error al cargar</p>;

  const handlePlayCry = () => {
    const audio = new Audio(pokemon.cries.latest);
    audio.play();
  };

  return (
    <div className="max-w-3xl mx-auto p-4 text-white space-y-6">
      <button
        onClick={() => handleBack()}
        className="px-4 py-1 bg-white/10 rounded text-sm hover:bg-white/20"
      >
        ⬅ Volver
      </button>

      <div className="bg-white/10 rounded-xl p-6 shadow-lg">
        <h1 className="text-4xl font-bold capitalize text-center mb-4">
          #{pokemon.id.toString().padStart(3, '0')} {pokemon.name}
        </h1>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          <img
            src={shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default}
            alt={pokemon.name}
            className="h-40 drop-shadow-xl"
          />
          <div className="space-x-2">
            <button
              onClick={() => setShiny(!shiny)}
              className="bg-white/10 px-3 py-1 rounded hover:bg-white/20 text-sm"
            >
              {shiny ? '🔁 Normal' : '✨ Shiny'}
            </button>
            <button
              onClick={handlePlayCry}
              className="bg-white/10 px-3 py-1 rounded hover:bg-white/20 text-sm"
            >
              🔊 Grito
            </button>
          </div>
        </div>

        {/* Tipos */}
        <div className="mt-6 text-center">
          <h2 className="font-semibold mb-2">Tipos</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {pokemon.types.map((t, i) => (
              <span
                key={i}
                className={`inline-flex items-center justify-center px-3 py-[3px] rounded-full text-sm font-medium text-white ${getTypeColor(
                  t.type.name
                )}`}
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>

        {/* Habilidades */}
        <div className="mt-6 text-center">
          <h2 className="font-semibold mb-2">Habilidades</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {pokemon.abilities.map((a, i) => (
              <span
                key={i}
                className={`inline-flex items-center justify-center px-3 py-[3px] text-sm rounded-full ${
                  a.is_hidden
                    ? 'bg-yellow-500/50 text-white'
                    : 'bg-white/20 text-white'
                }`}
              >
                {a.ability.name}
                {a.is_hidden && ' (oculta)'}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6">
          <h2 className="font-semibold mb-4 text-center">Estadísticas</h2>
          <div className="space-y-3">
            {pokemon.stats.map((s) => (
              <div key={s.stat.name}>
                <p className="capitalize text-sm">
                  {s.stat.name}: {s.base_stat}
                </p>
                <div className="w-full h-2 bg-white/20 rounded">
                  <div
                    className="h-2 bg-white rounded"
                    style={{ width: `${Math.min(s.base_stat, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
