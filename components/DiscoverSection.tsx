import Image from 'next/image'
import { Flex, Box, Center, Heading, Text, Container, Square, Button, Link, SimpleGrid, GridItem } from "@chakra-ui/react"
import CusButton from '../components/CusButton'

function DiscoverSection() {
    return (
        <>
            <Box maxW='container.xl' mx={{ base: 0, md: 'auto' }} >
                <SimpleGrid px={{ base: 5, md: 0 }} mt='10' columns={{ base: 1, md: 2 }}>
                    <GridItem mr={{ base: 0, md: 10 }}>
                        <Image src='/Saree_1.jpg' alt='Saree' width='612' height='422' />
                    </GridItem>
                    <GridItem>
                        <Heading mb='5' color='brand'>Discover Our<br />
                            Saree Collections</Heading>
                        <Text mb='5' color='black'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </Text>
                        <CusButton title='Exlpore More!' path='/about' />
                    </GridItem>
                </SimpleGrid>
                <SimpleGrid px={{ base: 5, md: 0 }} my='10' columns={{ base: 1, md: 2 }}>
                    <GridItem mr={{ base: 0, md: 10 }} flex='1' mb={{ base: 5, md: 0 }}>
                        <Heading mb='5' color='brand'>Discover Our<br />
                            Jewellery Collections</Heading>
                        <Text mb='5' color='black'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </Text>
                        <CusButton title='Exlpore More!' path='/about' />
                    </GridItem>
                    <GridItem >
                        <Image src='/Jewel_1.jpg' alt='Saree' width='612' height='422' />
                    </GridItem>
                </SimpleGrid>
            </Box>

        </>
    )
}

export default DiscoverSection