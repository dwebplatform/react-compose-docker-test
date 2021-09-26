import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import { Text } from '../ui/Text';
import '../../styles/general/top-nav-style.scss';
import { useCustomDispatch } from './../../hooks/redux-hooks/useCustomDispatch';
import { MenuContainer } from './MenuContainer';
import classnames from 'classnames';
import { useCustomSelector } from './../../hooks/redux-hooks/useCustomSelector';

export const NavBarComponent = () => {
  const { toggleMenuAction } = useCustomDispatch();
  const { isToggled } = useCustomSelector((state) => state.toggleMenu);
  const [isCircleVisible, setVisible] = useState(false);
  const toggleMenu = () =>toggleMenuAction();
  return (
    <Box className="top-nav-wrapper">
      <AppBar position='relative'
        className="top-nav">
        <Box className="top-nav__left">
          <Box className="top-nav__left-item">
            <Box className="top-nav__left-icon-wrapper"
              onMouseOver={() =>setVisible(true)}
              onMouseLeave={() =>setVisible(false)}>
              {isCircleVisible && <Box className="top-nav__left-icon-cirle"></Box>}
              <MenuIcon
                onClick={() =>toggleMenu()}
                className="top-nav__left-icon" />
            </Box>
            <Text type="brand" weight="normal-up" size="large" className="top-nav__left-title" >Цифровая облачная платформа</Text>
          </Box>
        </Box>
      </AppBar>
      {isToggled && <Box className="slided-menu-shadow" onClick={() =>toggleMenu()}></Box>}
      <MenuContainer className={classnames("slided-menu", isToggled ? "slided-menu--on" : "")}/>
    </Box>
  )
}