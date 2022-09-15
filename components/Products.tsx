import { Flex, Box, Center, Heading, Text, Container, Spacer, Button, Image, propNames } from "@chakra-ui/react"
import CusButton2 from '../components/CusButton_2'

function Products(props: any) {
    return (
        <>
            <Flex alignItems="center" justifyContent="center" flexFlow={{ base: "column", md: "row" }} >
                <Image alt=' ' src={props.img} width='163' height='136' mr='5' border='1px' borderColor='gray.200' mb={{ base: 3 }} />
                <Box>
                    <Heading as='h4' size='md' color='#033303' mb='3'>{props.title}</Heading>
                    <Text fontSize='xs' mb='3'>{props.bodytext}</Text>
                    <Flex alignItems="center" justifyContent="center">
                        <Heading as='h6' size='xs' color='#C99035'>{props.price}</Heading>
                        <Spacer />
                        <CusButton2 title='Add To Cart' path={props.path} />
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}

export default Products