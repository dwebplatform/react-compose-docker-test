
import {combineReducers} from 'redux';
import {categoryReducer} from './categoryReducer';
import {toggleMenuReducer} from './toogleMenuReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  categories: categoryReducer,
  toggleMenu:toggleMenuReducer,
  users: userReducer,
});
export type RootReducerType = ReturnType<typeof rootReducer>;
