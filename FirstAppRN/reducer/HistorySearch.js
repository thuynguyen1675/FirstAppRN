import {types} from '../src/constant';

const initialState = {
  history: [],
};
export default function history(state = initialState, action) {
  switch (action.type) {
    case types.ADD_HISTORY: {
      return {
        history: [action.history, ...state.history],
      };
    }
    case types.DELETE_HISTORY: {
      let temp = state.history.filter((his) => his != action.history);
      return {
        history: temp,
      };
    }
    default:
      return state;
  }
}
