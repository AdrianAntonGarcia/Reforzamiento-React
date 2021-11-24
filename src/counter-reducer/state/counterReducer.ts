import { CounterAction } from '../actions/counter.actions';
import { CounterState } from '../interfaces/counter.interfaces';

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'reset':
      return { counter: 0, changes: 0, previous: 0 };
    case 'increaseBy':
      return {
        counter: state.counter + action.payload.value,
        changes: state.changes + 1,
        previous: state.counter,
      };
    default:
      return state;
  }
};
