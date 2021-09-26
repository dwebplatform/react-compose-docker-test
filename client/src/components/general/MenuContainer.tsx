
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { Text } from '../ui/Text';
import { ServiceMenu } from './ServiceMenu';
import '../../styles/general/menu-style.scss';
import { HomeIcon } from '../shared/HomeIcon';
import { RecentIcon } from '../shared/RecentIcon';
import classnames from 'classnames';

const BasicMenu = () => {
  return (<>
    <NavLink className="basic-menu__link" activeClassName="basic-menu__link--active" to='/home'>
      <Box className="basic-menu__item basic-menu__item--first">
        <Box className="basic-menu__icon-wrapper">
          <HomeIcon className="basic-menu__icon basic-menu__icon--home" />
        </Box>
        <Text className="basic-menu__body-text">Домой</Text>
      </Box>
    </NavLink>
    <NavLink 
    className="basic-menu__link basic-menu__link--last" 
    activeClassName="basic-menu__link--active"
    to='/recent'>
      <Box className="basic-menu__item">
        <Box className="basic-menu__icon-wrapper">
          <RecentIcon className="basic-menu__icon" />
        </Box>
        <Text className="basic-menu__body-text">Недавние</Text></Box>
    </NavLink >
  </>);
}


interface IMenuContainer {
  className?:string;
}
export const MenuContainer:React.FC<IMenuContainer> = ({ className = '' }) => {
  return (<Box className={classnames('basic-menu-wrapper',className)}>
      <Box className="basic-menu" >
        <BasicMenu />
      </Box>
      <Box>
        <ServiceMenu />
      </Box>
  </Box>);
}