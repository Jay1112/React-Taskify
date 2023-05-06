import React, { useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import { useAppContext } from './context/useAppContext';
import { AppActions } from './context/constants';

function App() {
  const {dispatch} = useAppContext();

  useEffect(()=>{
    if(localStorage.getItem('LOCAL_TODO_LIST_DATA')){
      const todoList = JSON.parse(localStorage.getItem('LOCAL_TODO_LIST_DATA'));
      dispatch( { type : AppActions.ASSIGN_TODO_LIST , payload : todoList } );
    }
  },[]);

  return (
    <ChakraProvider theme={theme}>
      <Box  textAlign="center"
            p='0.25rem' 
            fontSize="xl"
            display='flex'
            alignItems='center'
            justifyContent='center'>
        <Box  minWidth='300px'
              maxWidth='600px'
              width='95%'
              height='99vh' 
              display='flex'
              alignItems='center'
              justifyContent='flex-start'
              flexDirection='column'
              p='0.25rem 0.5rem'>
          <TopBar />
          <BottomBar />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
