import { usePokemonList } from "../hooks/usePokemonList";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import PokemonCard from "./PokemonCard";
import PokemonSearchBar from "./PokemonSearchBar";
import { PokemonDetails } from "../types/pokemon";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const LIMIT = 25;

const PokemonCardList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = parseInt(searchParams.get("offset") || "0");

  const {
    data: listData,
    isLoading,
    error,
    isFetching,
  } = usePokemonList(LIMIT, offset);

  const { searchResult, searchError, isSearching, searchPokemon, resetSearch } =
    usePokemonSearch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // puedes poner 'auto' si prefieres sin animación
    });
  }, [offset]);

  return (
    <div className="space-y-6">
      {/* 🔎 Barra de búsqueda */}
      <PokemonSearchBar onSearch={searchPokemon} />

      {/* 🔴 Error de búsqueda */}
      {searchError && (
        <p className="text-center text-red-400 font-medium">{searchError}</p>
      )}

      {/* ⏳ Estado de búsqueda */}
      {isSearching && (
        <p className="text-center text-gray-200">Buscando pokémon...</p>
      )}

      {/* ✅ Resultado de búsqueda */}
      {searchResult ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center px-4">
          <PokemonCard pokemon={searchResult} />
          <div className="flex justify-center mt-4">
            <button
              onClick={resetSearch}
              className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 text-sm"
            >
              🔄 Volver a la lista
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* ⏳ Cargando lista */}
          {isLoading ? (
            <p className="text-center text-white">Cargando pokemones...</p>
          ) : error ? (
            <p className="text-center text-red-400">
              Error al cargar los pokemones
            </p>
          ) : (
            <>
              {/* ✅ Lista paginada */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 px-2 sm:px-4">
                {listData?.results.map((pokemon: PokemonDetails) => (
                  <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
              </div>

              {/* 🔁 Paginación */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={() =>
                    setSearchParams({
                      offset: String(Math.max(0, offset - LIMIT)),
                    })
                  }
                  disabled={!listData?.previous}
                  className="px-4 py-2 bg-white/20 text-white rounded hover:bg-white/30 disabled:opacity-30"
                >
                  Anterior
                </button>
                <button
                  onClick={() =>
                    setSearchParams({ offset: String(offset + LIMIT) })
                  }
                  disabled={!listData?.next}
                  className="px-4 py-2 bg-white/20 text-white rounded hover:bg-white/30 disabled:opacity-30"
                >
                  Siguiente
                </button>
              </div>
            </>
          )}
        </>
      )}

      {isFetching && !isSearching && (
        <p className="text-center text-sm text-gray-300">Actualizando...</p>
      )}
    </div>
  );
};

export default PokemonCardList;
