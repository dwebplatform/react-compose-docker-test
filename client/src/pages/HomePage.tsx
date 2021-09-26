import React from 'react';
import classnames from 'classnames';
import {Text} from '../components/ui/Text';
import Box from '@material-ui/core/Box';
import mainImg from '../images/webplatform_img.jpg';
import '../styles/general/main-page-container-style.scss';

interface IHomeComponent {
  className?: string;
}
const HomeComponent:React.FC<IHomeComponent>=({className})=>{
  return (<Box  className={classnames("main-page-container",className)}>
        <img alt="main page" 
        className="main-page-container__image"
        src={mainImg} 
        />
  </Box>);
}
export const HomePage=()=>{
  return (<Box className="main-component">
          <Box className="main-component__menu">

          </Box>
          <Box  className="main-component__service">
            <HomeComponent />
          </Box>
    </Box>);
      
}