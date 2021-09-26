
import Box from '@material-ui/core/Box';
import { useCustomDispatch } from './../hooks/redux-hooks/useCustomDispatch';
import { useCustomSelector } from './../hooks/redux-hooks/useCustomSelector';
import {IService} from '../reducers/categoryReducer';
import { useEffect } from 'react';
export const TestPage=()=>{
  const {fetchUsers, fetchAllUsers} = useCustomDispatch();
  const { selectedService }:{selectedService:IService|null} = useCustomSelector(state=>state.categories);
  const { users } = useCustomSelector(state=>state.users);
  console.log('test')
  useEffect(()=>{
    fetchAllUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
  <Box>
  
    {JSON.stringify(users)}
  </Box>)
}