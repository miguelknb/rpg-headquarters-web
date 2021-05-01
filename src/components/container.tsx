import {Box} from "@chakra-ui/react"

interface ContainerProps {}

const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <Box mt={8} mx="auto" maxW="400px" w="100%">
            {children}            
        </Box>
    )
}

export default Container;