import { usePokemon } from '../hooks/usePokemon';
import { Loading } from './Loading';

export const CardPoke: React.FC = () => {
  const { pokemon, name, handleIncrement, handleDecrement, handleReset } =
    usePokemon();

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
