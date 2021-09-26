import {ACTIONS} from '../actions/actions'
import { ActionsTypes } from '../actions/types/actionTypes'

interface UserModel {
  id: string|number;
  name: string;
  age: string;
}
interface IUser {
  users: Array<UserModel>,
  isLoading: boolean,
  error: {msg: string} | null
}

const initialState: IUser ={
  users: [],
  isLoading: false,
  error: null
};

type UserType = typeof initialState;

export const userReducer = (state:UserType=initialState, action: ActionsTypes):UserType =>{
  switch(action.type){
    case ACTIONS.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        error: null,
        users: action.users,
        isLoading: false,
      };
    case ACTIONS.FETCH_USER_LOADING:
    return {
      ...state,
      error: null,
      isLoading: true,
    }
    case ACTIONS.FETCH_USER_ERROR:
    return {
      ...state,
      isLoading: false,
      error: {
        msg:action.msg
      },
    }
    case ACTIONS.FETCH_USER_SUCCESS:
      return {
        ...state,
        users: action.users,
        isLoading: false,
        error: null,
      }
      default:
        return state;
  }
}