import {Button, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo from "../../assets/logo.webp"


const NavBar = () => {
const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack>
        <Image src={logo} boxSize={20}/>
        <Text>NavBar1</Text>
        <Button variant="outline" onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"}   
    </Button>
    </HStack>
  )
}

export default NavBar