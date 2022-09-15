import { Flex, Box, Heading, Stack, HStack, VStack, SimpleGrid, GridItem } from "@chakra-ui/react"
import Products from '../components/Products'

function ProductSection() {
    return (
        <div>
            <Box bg='#FFF4E6' >
                <Box maxW='container.xl' mx={{ base: 0, md: 'auto' }} >
                    <Heading pt='10' color='#033303' textAlign='center' mb='5'>Trending Products</Heading>
                    <SimpleGrid pb='10' columns={{ base: 1, md: 2 }} gap={{ base: 0, md: 5 }}>
                        <GridItem mb={{ base: 5, md: 0 }} p={{ base: 5 }}>
                            <Box flex='1' p='5' bg='white'>
                                <Products
                                    img='/Product_1.jpg'
                                    title='Card Item-1'
                                    bodytext='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                    price='$399'
                                    path='/about'
                                />
                            </Box>
                        </GridItem>
                        <GridItem mb={{ base: 5, md: 0 }} p={{ base: 5 }}>
                            <Box flex='1' p='5' bg='white'>
                                <Products
                                    img='/Product_2.jpg'
                                    title='Card Item-2'
                                    bodytext='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                    price='$99'
                                    path='/about'
                                />
                            </Box>
                        </GridItem>
                        <GridItem mb={{ base: 5, md: 0 }} p={{ base: 5 }}>
                            <Box flex='1' p='5' bg='white' gap={{ base: 0, md: 5 }}>
                                <Products
                                    img='/Product_3.jpg'
                                    title='Card Item-3'
                                    bodytext='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                    price='$199'
                                    path='/about'
                                />
                            </Box>
                        </GridItem>
                        <GridItem mb={{ base: 5, md: 0 }} p={{ base: 5 }}>
                            <Box flex='1' p='5' bg='white'>
                                <Products
                                    img='/Product_4.jpg'
                                    title='Card Item-4'
                                    bodytext='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                    price='$299'
                                    path='/about'
                                />
                            </Box>
                        </GridItem>
                    </SimpleGrid>
                </Box>
            </Box>
        </div>
    )
}

export default ProductSection