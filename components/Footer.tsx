import { Flex, Box, Link, Heading, Stack, HStack, VStack, Text, Spacer, SimpleGrid, GridItem } from "@chakra-ui/react"
import Image from 'next/image'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

function Footer() {
    return (
        <>
            <Box bg='#033303'>
                <Box py='10' maxW='container.xl' color='#C99035' mx='auto' borderBottom='1px' >
                    <SimpleGrid columns={{ base: 1, md: 3 }} gap={2} mx={{ base: 0, md: 'auto' }}>
                        <GridItem display={{ base: 'flex', md: 'flex' }} alignItems='center' justifyContent='center'>
                            <Stack direction={['column', 'row']} spacing={['20px', '50px']} textAlign={{ base: "center" }}>
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
                            </Stack>
                        </GridItem>
                        <GridItem display={{ base: 'flex', md: 'flex' }} alignItems='center' justifyContent='center'>
                            <Image src='/Logo_Full.png' width='150' height='150' alt='Logo' />
                        </GridItem>
                        <GridItem display={{ base: 'flex', md: 'flex' }} alignItems='center' justifyContent='center'>
                            <HStack spacing='50px'>
                                <BsFacebook />
                                <BsTwitter />
                                <BsInstagram />
                            </HStack>
                        </GridItem>
                    </SimpleGrid>
                </Box>
                <SimpleGrid maxW='container.xl' mx='auto' color='#ffffff' columns={{ base: 1, md: 2 }}>
                    <GridItem textAlign={{ base: 'center', md: 'left' }} pt={{ base: 4, md: 4 }} pb={{ base: 0, md: 4 }}>
                        Kavini &copy; 2022. All Rights Reserved.
                    </GridItem>
                    <GridItem textAlign={{ base: 'center', md: 'right' }} py={4}>
                        Designed & Developed by <Link href='http://www.glenise.com/' target='_blank'>Glenise</Link>
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    )
}

export default Footer