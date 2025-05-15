import { useCounter } from '../hooks/useCounter';
import { usePokemon } from '../hooks/usePokemon';
import { Loading } from './Loading';

const INITIAL_STATE = 1;

export const CardPoke: React.FC = () => {
  const { counter, handleDecrement, handleIncrement, handleReset } =
    useCounter(INITIAL_STATE);
  const { pokemon, name } = usePokemon(
    `https://pokeapi.co/api/v2/pokemon/${counter}`,
    counter,
  );

  return (
    <>
      <h1>card pokemon</h1>
      <hr />
      <div>{!pokemon ? <Loading /> : name}</div>

      <button
        className="btn btn-primary me-2"
        onClick={() => handleIncrement(1)}
      >
        Siguiente
      </button>

      <button className="btn btn-outline-primary me-2" onClick={handleReset}>
        Reinciar
      </button>

      <button className="btn btn-primary" onClick={() => handleDecrement(1)}>
        Anterior
      </button>
    </>
  );
};
