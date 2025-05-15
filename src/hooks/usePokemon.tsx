import { useEffect, useState } from 'react';
import { InterfacePokemon } from '../interfaces/interfacePokemon';

interface UsePokemonReturn {
  pokemon: InterfacePokemon | null;
  name?: string;
}

export const usePokemon = (url: string, counter: number): UsePokemonReturn => {
  const [pokemon, setPokemon] = useState<InterfacePokemon | null>(null);

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const getPokemon = async (): Promise<void> => {
    const response: Response = await fetch(url);
    const data: InterfacePokemon = await response.json();
    // console.log(data);
    setPokemon(data);
  };

  return {
    ...pokemon,
    pokemon,
  };
};
