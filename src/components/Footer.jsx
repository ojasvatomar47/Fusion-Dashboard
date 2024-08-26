import { Box, Text, Flex, useColorMode } from "@chakra-ui/react";

export const Footer = () => {
    const { colorMode } = useColorMode();

    const bgColor = colorMode === 'light' ? 'gray.100' : 'gray.700';
    const textColor = colorMode === 'light' ? 'black' : 'white';

    return (
        <Box bg={bgColor} color={textColor} py="3">
            <Flex justifyContent="center" alignItems="center">
                <Text fontSize="sm">
                    © {new Date().getFullYear()} Fusion. All rights reserved.
                </Text>
            </Flex>
        </Box>
    );
};
