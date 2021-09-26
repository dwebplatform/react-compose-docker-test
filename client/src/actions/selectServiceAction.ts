import {ACTIONS} from '../actions/actions';
export const selectServiceAction=(tag: string)=>{
  return {
    type: ACTIONS.CHANGED_SELECTED_SERVICE_BY_TAG,
    value:{ tag }
  } as const;

}