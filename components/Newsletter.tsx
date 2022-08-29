import {
    Flex, Box, Heading, Stack, HStack, VStack, Text, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input
} from "@chakra-ui/react"
import CusButton from '../components/CusButton'

function Newsletter() {
    return (
        <div>
            <Box>
                <Box mx='auto' style={{
                    backgroundImage: 'url(/Bg_2.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: 'full'
                }}>
                    <Box p='10'>
                        <Heading color='#C99035' textAlign='center' mb='5'>Sign up for Newsletter</Heading>
                        <Box w='100%' textAlign='center'>
                            Get updates about our new products and 10% discount on first order.
                            <FormControl isRequired>
                                <Input type='email' placeholder='Email address' w={{ base: 'full', md: '30%' }} my='10' />
                            </FormControl>
                            <CusButton title='Subscribe' path='/about' />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Newsletter