import { Image, Box } from "@chakra-ui/react"

function Banner() {
    return (
        <Box>
            <Image
                src='/Banner.jpg'
                alt='Banner Image'
                objectPosition={{ base: 'initial', md: 'initial' }}
                objectFit={{ base: 'cover', md: 'cover' }}
                width={1920}
                height={435} />
        </Box>
    )
}

export default Banner