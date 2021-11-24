import { useReducer } from 'react';
import { CounterState } from './interfaces/counter.interfaces';
import { counterReducer } from './state/counterReducer';

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
  const onReset = () => {
    dispatch({ type: 'reset' });
  };

  const increaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };
  return (
    <>
      <h1>Counter Reducer segmentado: </h1>
      <pre>{JSON.stringify(state, null, 5)}</pre>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
};
