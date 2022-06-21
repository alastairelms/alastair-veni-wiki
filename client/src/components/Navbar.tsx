/* eslint-disable jsx-a11y/anchor-is-valid */
// import "../styles/Navbar.css"
import { Button, Heading } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <HStack p={3}>
            <Heading mr={5} size='xl'>Star Wars Wiki</Heading>
            <Button size="xs" colorScheme='blue'>Home</Button>
        </HStack>
    )
}

export default Navbar;
