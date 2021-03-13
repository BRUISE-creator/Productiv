import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  CSSReset,
  Flex,
  Spacer,
  Heading,
  Drawer,
  isOpen,
  onClose,
  btnRef,
  onOpen,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Button, ButtonGroup } from "@chakra-ui/react";
import { ThemeProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import DrawerExample from './components/addtask';
import Pomodoro from "./components/pomodoro";

function App() {
  return (
    <ChakraProvider>
      <Flex padding="10">
        <Spacer />
        <Box p="2">
          <Heading size="xl">Productiv</Heading>
        </Box>
        <Spacer />
        <DrawerExample>


        </DrawerExample>
      </Flex>
      <div className="App">
        
        <Pomodoro/>
      </div>
    </ChakraProvider>
  );
}

export default App;
