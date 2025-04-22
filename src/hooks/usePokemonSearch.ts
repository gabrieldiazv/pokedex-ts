import { useState } from 'react';
import { PokemonDetails } from '../types/pokemon';
import { PokemonDetailsResponse } from '../types/pokemon.response';

export const usePokemonSearch = () => {
    const [searchResult, setSearchResult] = useState<PokemonDetails | null>(null);
    const [searchError, setSearchError] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const searchPokemon = async (name: string) => {
        setIsSearching(true);
        setSearchResult(null);
        setSearchError('');

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            if (!res.ok) throw new Error('No encontrado');
            const data: PokemonDetailsResponse = await res.json();

            const pokemon: PokemonDetails = {
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

            setSearchResult(pokemon);
        } catch (err) {
            console.log(err)
            setSearchError('Pokémon no encontrado');
        } finally {
            setIsSearching(false);
        }
    };

    const resetSearch = () => {
        setSearchResult(null);
        setSearchError('');
    };

    return {
        searchResult,
        searchError,
        isSearching,
        searchPokemon,
        resetSearch,
    };
};
