import { Flex, Box, Heading, Stack, HStack, VStack, Text } from "@chakra-ui/react"


function TestimonialSec() {
    return (
        <div>
            <Box maxW='container.xl' mx={{ base: 0, md: 'auto' }} mt='10'>
                <Box mx='auto' style={{
                    backgroundImage: 'url(/Bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: 'container.xl'
                }}>
                    <Box p={{ base: 5, md: 10 }}>
                        <Heading color='#C99035' textAlign='center' mb='5'>What Client&lsquo;s Say</Heading>
                        <Box w='100%' textAlign='center' color='#f2f2f2'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br /><br />
                            <Text color='#C99035'>- Name Name</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default TestimonialSec