import {ACTIONS} from './actions';

interface IUser {
  id: number;
  name: string;
  age: string;
}
export const fetchAllUsersAction=(users: Array<IUser>)=>{
  return {
    type: ACTIONS.FETCH_ALL_USERS_SUCCESS,
    users:users
  } as const;
} 
export const fetchUserAction=(users:[any])=>{
  return {
    type: ACTIONS.FETCH_USER_SUCCESS,
    users
  } as const;
}
export const fetchUserLoadingAction=()=>{
  return {
    type: ACTIONS.FETCH_USER_LOADING,
  } as const;
}
export const fetchUserErrorAction=()=>{
  return {
    type: ACTIONS.FETCH_USER_ERROR,
    msg:'Произошла ошибка'
  } as const;
}