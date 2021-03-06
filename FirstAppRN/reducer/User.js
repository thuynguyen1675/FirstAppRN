import {types} from '../src/constant';

const initialState = {
  name: null,
  email: null,
  avatar: null,
  phone: null,
  id: null,
  following: [],
  favorite: [],
  token: null,
};
export default function user(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN: {
      return {
        ...state,
        name: action.data.name,
        email: action.data.email,
        avatar: action.data.avatar,
        phone: action.data.phone,
        id: action.data.id,
        token: action.data.token,
      };
    }
    case types.FOLLOW_AUTHOR: {
      var temp = state.following;
      temp.push(action.author);
      return {
        ...state,
        following: temp,
      };
    }
    case types.ADD_FAVORITE: {
      var temp1 = state.favorite;
      temp1.push(action.favorite);
      return {
        ...state,
        favorite: temp1,
      };
    }
    default:
      return state;
  }
}
