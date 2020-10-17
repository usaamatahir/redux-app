import { increment, decrement } from "./Action";

const initialState = {
  counter: 0,
};

interface actionType {
  type: string;
}

export default function CounterReducer(
  state = initialState,
  action: actionType
) {
  switch (action.type) {
    case increment:
      return { ...state, counter: state.counter + 1 };
    case decrement:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
