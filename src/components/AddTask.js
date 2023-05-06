import React from 'react';
import {
  Box,
  Input,
  Button
} from '@chakra-ui/react';
import { useAppContext } from '../context/useAppContext';
import { AppActions } from '../context/constants';
import { AddIcon } from '@chakra-ui/icons'


function AddTask() {
    const {state,dispatch} = useAppContext();

    function addTaskToList(e){
        if(e.key === undefined || (e.key === 'Enter' && e.target.value.length > 0)){
            const taskObject = {
                id : Date.now(),
                text : state.inputText,
                isCompleted : false
            };
            const updatedTodoList = [
                ...state.todoList,
                taskObject
            ]
            dispatch( { type : AppActions.ADD_TASK , payload : updatedTodoList } );
            dispatch( { type : AppActions.CLEAR_INPUT_TEXT } );
        }
    }

  return (
    <Box    width='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'>
        <Input  _focusVisible={false}
                placeholder='Enter Your Task...'
                value={state.inputText}
                borderRadius={'0px'}
                m='0 0.5rem 0 0'
                height='50px'
                onKeyPress={(e)=>addTaskToList(e)}
                onChange={(e)=>{
                    dispatch({type : AppActions.CHANGE_INPUT_TEXT, payload : e.target.value});
                }}
                flex='1' />
        <Button colorScheme='teal' 
                height='50px' 
                isDisabled={ state.inputText.length > 0 ? false : true }
                borderRadius={'0px'} 
                variant='solid'
                onClick={addTaskToList}>
            <AddIcon/>
        </Button>
    </Box>
  );
}

export default AddTask;
