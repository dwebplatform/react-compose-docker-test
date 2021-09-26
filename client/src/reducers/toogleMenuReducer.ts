import {ACTIONS} from '../actions/actions'
import { ActionsTypes } from '../actions/types/actionTypes'
const initialState ={
  isToggled: true,
}

type toggleMenuType = typeof initialState;

export const toggleMenuReducer=(state:toggleMenuType=initialState, action: ActionsTypes):toggleMenuType =>{
  switch(action.type){
    case ACTIONS.CHANGE_TOGGLE:
      return {
        ...state,
        isToggled: !state.isToggled
      }
      default:
        return state;
  }
}