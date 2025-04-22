import { useQuery } from '@tanstack/react-query';
import { PokemonDetailsExtended } from '../types/pokemon';
import { PokemonDetailsResponse } from '../types/pokemon.response';

const fetchPokemonDetails = async (id: number): Promise<PokemonDetailsExtended> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error('No se pudo cargar el Pokémon');

  const data: PokemonDetailsResponse = await res.json();

  return {
    id: data.id,
    name: data.name,
    sprites: {
      front_default: data.sprites.front_default,
      front_shiny: data.sprites.front_shiny,
    },
    types: data.types.map((t) => ({
      type: { name: t.type.name },
    })),
    abilities: data.abilities.map((a) => ({
      ability: { name: a.ability.name },
      is_hidden: a.is_hidden,
    })),
    cries: {
      latest: data.cries.latest,
    },
    stats: data.stats,
  };
};

export const usePokemonDetails = (id: number) =>
  useQuery({
    queryKey: ['pokemon-details', id],
    queryFn: () => fetchPokemonDetails(id),
    enabled: !!id, // solo ejecuta si hay un id válido
  });
