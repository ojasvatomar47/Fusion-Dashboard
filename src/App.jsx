import React from 'react';
import { Flex } from "@chakra-ui/react";
import { Sidebar } from './components/Sidebar';
import { MainPage } from './pages/MainPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChakraProvider, ColorModeScript, useColorMode } from "@chakra-ui/react";
import customTheme from './theme';

const Layout = () => (
  <Flex direction="column" minH="100vh">
    <Navbar />
    <Flex direction={["column", "column", "row"]} flex="1" overflow="auto">
      <Sidebar />
      <MainPage />
    </Flex>
    <Footer />
  </Flex>
);

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <Layout />
    </ChakraProvider>
  );
};

export default App;
