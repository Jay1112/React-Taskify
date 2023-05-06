import React from 'react';
import {
  Box,
  Text,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import AddTask from './AddTask';

function TopBar() {
  return (
    <>
        <Box  textAlign="center"
                width='100%'
                fontSize="xl"
                display='flex'
                alignItems='stretch'
                justifyContent='center'
                
                flex='0.1'>
                <Box    flex='1' 
                        display='flex'
                        alignItems='center'
                        justifyContent='flex-start'>
                    <Text   align='left' 
                            fontSize='2xl'
                            fontWeight='bold'
                            letterSpacing='0.1rem'>
                        Todo-App
                    </Text>
                </Box>
                <Box    display='flex'
                        alignItems='center'
                        justifyContent='center'>
                        <ColorModeSwitcher />
                </Box>
        </Box>
        <Box   width='100%'
                fontSize="xl"
                display='flex'
                alignItems='stretch'
                justifyContent='center'
                flex='0.1'>
                <AddTask />
        </Box>
    </>
  );
}

export default TopBar;
