import { Box, LinkBox, LinkOverlay } from "@chakra-ui/react"

function CusButton2(props: any) {
    return (
        <div>
            <LinkBox>
                <LinkOverlay href={props.path}>
                    <Box
                        as="button"
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        border="1px"
                        p="5px 15px"
                        rounded="30px"
                        fontSize="13px"
                        fontWeight="semibold"
                        bg="#C99035"
                        borderColor="#C99035"
                        color="#033303"
                        _hover={{ bg: "#C99035" }}
                        _active={{
                            bg: "#C99035",
                            transform: "scale(0.98)",
                            borderColor: "#C99035",
                        }}
                    >
                        {props.title}
                    </Box>
                </LinkOverlay>
            </LinkBox>
        </div>
    )
}

export default CusButton2