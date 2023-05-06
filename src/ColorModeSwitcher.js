import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useAppContext } from './context/useAppContext';
import { AppActions } from './context/constants';

export const ColorModeSwitcher = props => {
  const {dispatch} = useAppContext();
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  function changeTheme(){
    toggleColorMode();
    let theme = localStorage.getItem('chakra-ui-color-mode');
    if(theme === 'light'){
      dispatch({ type : AppActions.CHANGE_THEME, payload : 'dark' });
    }else{
      dispatch({ type : AppActions.CHANGE_THEME, payload : 'light' });
    }
  }

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      onClick={changeTheme}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
