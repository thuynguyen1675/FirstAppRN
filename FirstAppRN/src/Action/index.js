import {types} from '../constant';

export const login = (data) => ({
  type: types.LOGIN,
  data,
});

export const switchMode = (isDarkMode) => ({
  type: types.SWITCH_MODE,
  isDarkMode,
});
export const switchActive = (active) => ({
  type: types.SWITCH_ACTIVE,
  active,
});
export const followAuthor = (author) => ({
  type: types.FOLLOW_AUTHOR,
  author,
});
export const addFavorite = (favorite) => ({
  type: types.ADD_FAVORITE,
  favorite,
});
export const addHistory = (history) => ({
  type: types.ADD_HISTORY,
  history,
});
export const deleteHistory = (history) => ({
  type: types.DELETE_HISTORY,
  history,
});
export const changeLanguage = (language) => ({
  type: types.CHANGE_LANGUAGE,
  language,
});
