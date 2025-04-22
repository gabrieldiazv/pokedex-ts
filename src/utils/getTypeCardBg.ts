export const getTypeCardBg = (type: string): string => {
  switch (type) {
    case 'fire':
      return 'bg-red-600/70';
    case 'water':
      return 'bg-blue-500/70';
    case 'grass':
      return 'bg-green-500/70';
    case 'electric':
      return 'bg-yellow-400/70 text-black';
    case 'ice':
      return 'bg-cyan-300/70 text-black';
    case 'psychic':
      return 'bg-pink-500/70';
    case 'dark':
      return 'bg-gray-800/70';
    case 'ghost':
      return 'bg-indigo-800/70';
    case 'dragon':
      return 'bg-indigo-700/70';
    case 'poison':
      return 'bg-purple-600/70';
    case 'rock':
      return 'bg-yellow-800/70';
    case 'ground':
      return 'bg-yellow-600/70';
    case 'fairy':
      return 'bg-pink-300/70 text-black';
    case 'fighting':
      return 'bg-red-700/70';
    case 'steel':
      return 'bg-gray-500/70';
    case 'bug':
      return 'bg-lime-600/70';
    case 'flying':
      return 'bg-indigo-400/70';
    case 'normal':
    default:
      return 'bg-gray-400/70 text-black';
  }
};
