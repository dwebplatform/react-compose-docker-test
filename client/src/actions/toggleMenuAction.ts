import {ACTIONS} from './actions';
export const toggleMenuAction=()=>{
  return {
    type: ACTIONS.CHANGE_TOGGLE,
  } as const;
}