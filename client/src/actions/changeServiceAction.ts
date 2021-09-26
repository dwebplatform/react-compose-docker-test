import {ACTIONS} from './actions';
export const changeServiceAction=(id:number)=>{
  return {
    type: ACTIONS.CHANGED_SELECTED_SERVICE,
    value: {id}
  } as const;
}