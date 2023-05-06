import React from 'react';
import {
  Box,
  Button,
  Text
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { useAppContext } from '../context/useAppContext';
import { AppActions } from '../context/constants';
import EditTaskPopup from './EditTaskPopup';

function TodoItem(props) {
    const buttonWidth = 35 ; 
    const buttonHeight = 35 ;
    const {state,dispatch} = useAppContext();

    function onDoneButtonClicked(e){
        const updatedTodos = state.todoList.map((todo)=>{
            if(todo.id === props?.todo?.id){
                return {
                    ...todo,
                    isCompleted : !todo.isCompleted,
                }
            }
            return todo;
        });
        dispatch({ type : AppActions.MARK_TASK_DONE, payload : updatedTodos });
    }

    function onDeleteButtonClicked(e){
        const updatedTodos = state.todoList.filter((todo)=>{
            if(todo.id === props?.todo?.id){
                return false;
            }
            return true;
        });
        dispatch({ type : AppActions.DELETE_TASK, payload : updatedTodos });
    }


  return (
    <Box    bg='teal'
            width='100%'
            borderRadius={3}
            padding='0.75rem 0.5rem'
            margin='1rem 0'
            display='flex'
            alignItems='stretch'
            justifyContent='center'>
        <Box  flex='1' 
              display='flex' 
              alignItems='stretch'
              justifyContent='center'>
            <Text   align='left' 
                    color='white'
                    fontWeight={600}
                    width='100%' 
                    display='flex' 
                    alignItems='center'
                    justifyContent='flex-start'>
                {   props?.todo?.isCompleted ?
                    <s>{props?.todo?.text}</s> : 
                    props?.todo?.text 
                }
            </Text>
        </Box>
        <Box    display='flex'
                alignItems='center'
                justifyContent='center'>
            <Button bg='green.500'
                    height={buttonWidth} 
                    width={buttonHeight}
                    color='white'
                    margin='0 0.25rem'
                    borderRadius={'0px'} 
                    onClick={onDoneButtonClicked}
                    variant='solid'>
                <CheckIcon/>
            </Button>
            <EditTaskPopup todo={props?.todo} />
            <Button bg='red.500' 
                    height={buttonWidth} 
                    width={buttonHeight}
                    color='white'
                    margin='0 0.25rem'
                    borderRadius={'0px'} 
                    onClick={onDeleteButtonClicked}
                    variant='solid'>
                <CloseIcon/>
            </Button>
        </Box>
    </Box>
  );
}

export default TodoItem;
