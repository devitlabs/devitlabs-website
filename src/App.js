import logo from "./assets/logo.png";
import { useState } from "react";
import { Box, Button, HStack, Image, Link } from "@chakra-ui/react";

function CustomLink({ tilte, fontSize }) {
  return (
    <Link
      _hover={{ color: "orange.500" }}
      color={activeLink}
      fontSize={fontSize}
    >
      {tilte}
    </Link>
  );
}

function App() {
  return (
    <Box margin="20px" height="60px">
      <HStack justifyContent="space-between">
        <Image src={logo} alt="Dan Abramov" height="60px" />
        <HStack spacing={5}>
          <CustomLink tilte="Accueil" fontSize="20px" />
        </HStack>
        <Button colorScheme="orange">Git In Touch</Button>
      </HStack>
    </Box>
  );
}

export default App;
