import {combineReducers} from 'redux';
import user from './User';
import history from './HistorySearch';
const rootReducer = combineReducers({
  user,
  history,
});

export default rootReducer;
