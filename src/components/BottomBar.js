import React from 'react';
import {
  Box,
  Select,
  Button
} from '@chakra-ui/react';
import TodoList from './TodoList';
import { AppActions, FilterValues } from '../context/constants';
import { useAppContext } from '../context/useAppContext';

function BottomBar() {
    const {state,dispatch} = useAppContext();

  return (
    <>
        <Box    flex='0.1'
                width='100%'
                display='flex'
                alignItems='center'
                justifyContent='flex-start'>
            <Select flex='1'
                    value={state.filterValue}
                    onChange={(e)=>{
                        dispatch({
                            type : AppActions.CHANGE_FILTER_VALUE,
                            payload : e.target.value
                        });
                    }}
                    _focusVisible={false}
                    borderRadius={0}
                    height='45px'>
                {
                    Object.keys(FilterValues).map((item,index)=>{
                        return <option key={index} value={FilterValues[item]}>
                                {FilterValues[item]}
                            </option>
                    })
                }
            </Select>  
            <Button colorScheme='teal' 
                    height='45px' 
                    m='0 0 0 0.5rem'
                    borderRadius={'0px'} 
                    isDisabled={ (state.todoList && state.todoList.length > 0) ? false : true }
                    variant='solid'
                    onClick={()=>{
                        dispatch({
                            type : AppActions.CLEAR_INPUT_TEXT
                        });
                        dispatch({
                            type : AppActions.CLEAR_TODO_LIST,
                        });
                    }}
                    >
                CLEAR
            </Button>
        </Box>
        <Box    flex='0.9'
                overflow={'scroll'} 
                width='100%'
                display='flex'
                alignItems='stretch'
                justifyContent='center'>
            <TodoList />
        </Box>
    </>
  );
}

export default BottomBar;
