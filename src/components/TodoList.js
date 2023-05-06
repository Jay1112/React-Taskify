import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import TodoItem from './TodoItem';
import { useAppContext } from '../context/useAppContext';
import { FilterValues } from '../context/constants';

function TodoList() {
  const {state} = useAppContext();

   return (
    <Box  width='100%'>
      {
          state.filterValue && state.todoList?.map(( todo ) => {
            if(state.filterValue === FilterValues.ALL){
              return <TodoItem key={todo.id} todo={todo} />
            }else if(state.filterValue === FilterValues.COMPLETED && todo.isCompleted){
              return <TodoItem key={todo.id} todo={todo} />
            }else if(state.filterValue === FilterValues.REMAINING && !todo.isCompleted){
              return <TodoItem key={todo.id} todo={todo} />
            }
            return <></>
        })
      }
    </Box>
  );
}

export default TodoList;
