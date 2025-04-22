export interface PokemonListItem {
    name: string;
    url: string;
}

export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}

export interface PokemonDetailsResponse {
    id: number;
    name: string;
    sprites: {
      front_default: string;
      front_shiny: string;
      [key: string]: string | null;
    };
    types: Array<{
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }>;
    abilities: Array<{
      is_hidden: boolean;
      slot: number;
      ability: {
        name: string;
        url: string;
      };
    }>;
    cries: {
      latest: string;
    };
    stats: Array<{
      base_stat: number;
      stat: {
        name: string;
      };
    }>;
  }
  
