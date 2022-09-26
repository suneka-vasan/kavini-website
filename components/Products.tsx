import { Flex, Box, Center, Heading, Text, Container, Spacer, Button, SimpleGrid, Wrap } from "@chakra-ui/react"
import CusButton2 from '../components/CusButton_2'
import Product_1 from '../components/Product_1'


function StackEx() {
    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} justifyItems={"center"} gap={5} pb='10'>
            <Product_1 />
        </SimpleGrid>
    )
}

export default StackEx