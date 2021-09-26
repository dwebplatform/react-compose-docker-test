
import {  Dispatch } from "redux";
import {ActionsTypes} from '../../actions/types/actionTypes';
import {fetchUserAction,fetchUserLoadingAction, fetchUserErrorAction} from '../../actions/fetchUserAction';
import { UserController } from '../../api/UserController';
import { fetchAllUsersAction } from './../fetchUserAction';
export const thunkActions = {
  fetchAllUsers: ()=> async (dispatch: Dispatch<ActionsTypes>)=>{
    dispatch(fetchUserLoadingAction());
    const data = await UserController.getAllUsers();
    console.log(data);
    dispatch(fetchAllUsersAction(data.users));
  },
  fetchUsers: () => async (dispatch: Dispatch<ActionsTypes>) => {
    try {
      dispatch(fetchUserLoadingAction());
      const  data = await UserController.getUsers();
      dispatch(fetchUserAction(data));
    } catch (e) {
      dispatch(fetchUserErrorAction());
    }
  }
};

export type ThunkActionsType = typeof thunkActions;
