import { useEffect, useState } from 'react';
import { InterfacePokemon } from '../interfaces/interfacePokemon';
import { useCounter } from './useCounter';

interface UsePokemonReturn {
  pokemon: InterfacePokemon | null;
  name?: string;
  handleIncrement: (value: number) => void;
  handleDecrement: (value: number) => void;
  handleReset: () => void;
}

const INITIAL_STATE = 1;

export const usePokemon = (): UsePokemonReturn => {
  const [pokemon, setPokemon] = useState<InterfacePokemon | null>(null);
  const { counter, handleIncrement, handleDecrement, handleReset } =
    useCounter(INITIAL_STATE);

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const getPokemon = async (): Promise<void> => {
    const response: Response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${counter}`,
    );
    const data: InterfacePokemon = await response.json();
    // console.log(data);
    setPokemon(data);
  };

  return {
    ...pokemon,
    pokemon,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};
