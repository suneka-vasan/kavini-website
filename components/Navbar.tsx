import { useState } from 'react'
import {
    useColorMode,
    Switch,
    Flex,
    Button,
    IconButton, Box, Spacer, HStack, Image, Link
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { BsSearch, BsHeart, BsBag } from 'react-icons/bs'


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [display, changeDisplay] = useState('none')
    return (
        <Box w='100%' bgColor='#033303'>
            <Box w='60%' mx='auto'>
                {/* Desktop */}
                <Flex
                    display={['none', 'none', 'flex', 'flex']}
                    color='#DDAC66'>
                    <Box p='2'>
                        <Link href="/"><Image src='/Logo.png' alt='Logo' width='150' height='33' /></Link>
                    </Box>
                    <Spacer />
                    <HStack spacing='50px'>
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/about">
                            About Us
                        </Link>
                        <Link href="/services">
                            Services
                        </Link>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </HStack>
                    <Spacer />
                    <HStack spacing='50px'>
                        <BsSearch />
                        <BsHeart />
                        <BsBag />
                    </HStack>
                </Flex>

                {/* Mobile */}

                <IconButton
                    aria-label="Open Menu"
                    color='#DDAC66'
                    bgColor='transparent'
                    size="lg"
                    mr={2}
                    icon={
                        <HamburgerIcon />
                    }
                    onClick={() => changeDisplay('flex')}
                    display={['flex', 'flex', 'none', 'none']}
                />

            </Box>

            {/* Mobile Content */}
            <Flex
                w='100vw'
                display={display}
                bgColor="gray.50"
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                z-index={20}
                overflowY="auto"
                flexDir="column"
            >
                <Flex justify="flex-end">
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label="Open Menu"
                        size="lg"
                        icon={
                            <CloseIcon />
                        }
                        onClick={() => changeDisplay('none')}
                    />
                </Flex>

                <Flex
                    flexDir="column"
                    align="center"
                >
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/about">
                        About Us
                    </Link>
                    <Link href="/services">
                        Services
                    </Link>
                    <Link href="/contact">
                        Contact
                    </Link>
                </Flex>
            </Flex>

        </Box>
    )
}
export default Navbar