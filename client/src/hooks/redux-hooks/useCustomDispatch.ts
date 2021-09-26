import {thunkActions} from '../../actions/thunk-actions/index';
import {  bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as actions from "../../actions/index";


export function useCustomDispatch() {
  const dispatch = useDispatch();
  return bindActionCreators({...actions, ...thunkActions }, dispatch);
}