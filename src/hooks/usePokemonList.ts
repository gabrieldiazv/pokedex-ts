import { useQuery } from '@tanstack/react-query';
import { PokemonDetails } from '../types/pokemon';
import { PokemonDetailsResponse, PokemonListResponse } from '../types/pokemon.response';

const fetchPokemonListWithDetails = async (limit: number, offset: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const list: PokemonListResponse = await res.json();

  const details: PokemonDetails[] = await Promise.all(
    list.results.map(async (p) => {
      const res = await fetch(p.url);
      const data : PokemonDetailsResponse = await res.json();

      return {
        id: data.id,
        name: data.name,
        sprites: {
          front_default: data.sprites.front_default,
        },
        types: data.types.map((t) => ({
            type: { name: t.type.name },
          })),
          abilities: data.abilities.map((a) => ({
            ability: { name: a.ability.name },
            is_hidden: a.is_hidden,
          })),
      };
    })
  );

  return {
    count: list.count,
    next: list.next,
    previous: list.previous,
    results: details,
  };
};

export const usePokemonList = (limit = 10, offset = 0) =>
  useQuery({
    queryKey: ['pokemon-list', limit, offset],
    queryFn: () => fetchPokemonListWithDetails(limit, offset),
  });

