import React, { useEffect, useState } from "react";
import { EditIcon } from '@chakra-ui/icons'
import { useDisclosure, Button, Modal, ModalOverlay, FormLabel, ModalBody } from "@chakra-ui/react";
import { FormControl, Input, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from "@chakra-ui/react";
import { useAppContext } from "../context/useAppContext";
import { AppActions } from "../context/constants";

function EditTaskPopup(props) {
    const [text,setText] = useState('');
    const {state,dispatch} = useAppContext();
    const buttonWidth = 35 ; 
    const buttonHeight = 35 ;
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    useEffect(()=>{
        setText(props?.todo?.text);
    },[]);

    function onSaveButtonClicked(e){
        const updatedTodos = state.todoList.map((todo)=>{
            if(todo.id === props?.todo?.id){
                return {
                    ...todo,
                    text : text,
                }
            }
            return todo;
        });
        dispatch({ type : AppActions.EDIT_TASK_DONE, payload : updatedTodos });
        onClose();
    }
  
    return (
      <>
        <Button bg='yellow.500'
                onClick={onOpen}
                height={buttonWidth} 
                width={buttonHeight}
                color='white'
                margin='0 0.25rem'
                borderRadius={0}
                variant='solid'>
            <EditIcon/>
        </Button>  
        <Modal

          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent borderRadius={0}>
            <ModalHeader>Edit Your Task</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Text</FormLabel>
                <Input value={text} onChange={(e)=>setText(e.target.value)} ref={initialRef} placeholder='First name' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={onSaveButtonClicked} colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default EditTaskPopup;