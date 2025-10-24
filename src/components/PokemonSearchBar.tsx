import { useState } from 'react';
import { Search } from 'lucide-react'; // puedes usar otro ícono si prefieres

interface Props {
  onSearch: (name: string) => void;
}

const PokemonSearchBar = ({ onSearch }: Props) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input.trim().toLowerCase());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-2 my-4"
    >
      <div className="relative w-72">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Buscar pokémon por nombre..."
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
      >
        Buscar Pokemon
      </button>
    </form>
  );
};

export default PokemonSearchBar;

