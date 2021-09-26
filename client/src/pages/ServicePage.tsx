import {useEffect} from 'react';
import Box from '@material-ui/core/Box';
import { ServiceContainer } from '../components/general/ServiceContainer';
import '../styles/general/main-component-style.scss';
import {useParams} from 'react-router-dom';
import {useCustomDispatch} from '../hooks/redux-hooks/useCustomDispatch';

interface IServicePageParams{
  tag: string;
}
export const ServicePage=()=>{

  let { tag } = useParams<IServicePageParams>();
  const { selectServiceAction } = useCustomDispatch();
  useEffect(()=>{
    selectServiceAction(tag);
  },[tag,selectServiceAction]);// eslint-disable-line react-hooks/exhaustive-deps
return (<Box className="main-component" >
          <Box className="main-component__menu">
          </Box>
          <Box  className="main-component__service">
            <ServiceContainer/>
          </Box>
        </Box>);
}