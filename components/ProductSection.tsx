import { Box, Heading, SimpleGrid, GridItem } from "@chakra-ui/react"
import Product_1 from '../components/Product_1'

function ProductSection() {
    return (
        <div>
            <Box bg='#FFF4E6' >
                <Box maxW='container.xl' mx={{ base: 0, md: 'auto' }} >
                    <Heading pt='10' color='#033303' textAlign='center' mb='5'>Trending Products</Heading>
                    <Product_1 />
                </Box>
            </Box>
        </div>
    )
}

export default ProductSection