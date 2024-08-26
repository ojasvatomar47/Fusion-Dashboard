import {
    Avatar,
    Box,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useMediaQuery,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    useColorMode,
    IconButton,
} from "@chakra-ui/react";
import { FaChevronRight, FaSun, FaMoon } from "react-icons/fa";
import avatar from '../assets/avatar.png';

export const Navbar = () => {
    const [isTabletOrSmaller] = useMediaQuery("(max-width: 768px)");
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            align="center"
            p="4"
            boxShadow="md"
            bg={colorMode === "light" ? "white" : "gray.800"}
            borderBottom="1px solid"
            borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
            position="relative" // Changed to relative
            top="0"
            zIndex="1000"
            height={isTabletOrSmaller ? "60px" : "80px"}
        >
            {/* For smaller screens, position mode toggle on the far left */}
            {isTabletOrSmaller && (
                <Box position="absolute" left="4" top="50%" transform="translateY(-50%)">
                    <IconButton
                        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                        isRound
                        size="lg"
                        onClick={toggleColorMode}
                        aria-label="Toggle dark mode"
                    />
                </Box>
            )}

            {/* Breadcrumb for larger screens */}
            {!isTabletOrSmaller && (
                <Box position="absolute" bottom="8px" left="16px">
                    <Breadcrumb
                        spacing="8px"
                        separator={<FaChevronRight color={colorMode === "light" ? "gray.500" : "gray.400"} />}
                        fontSize="md"
                        color={colorMode === "light" ? "gray.700" : "gray.300"}
                    >
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
            )}

            <Text
                fontSize={isTabletOrSmaller ? "xl" : "3xl"}
                fontWeight="bold"
                fontFamily="'Roboto', sans-serif"
                letterSpacing="wider"
                textAlign="center"
                mx="auto"
                position="absolute"
                left="50%"
                transform="translateX(-50%)"
                color={colorMode === "light" ? "gray.800" : "gray.100"}
            >
                FUSION
            </Text>

            <Flex align="center" ml="auto" pr="4">
                {/* Hide mode toggle button on larger screens */}
                {!isTabletOrSmaller && (
                    <IconButton
                        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                        isRound
                        size="lg"
                        onClick={toggleColorMode}
                        mr="4"
                        aria-label="Toggle dark mode"
                    />
                )}
                {!isTabletOrSmaller && (
                    <Text
                        mr="4"
                        fontSize="lg"
                        fontWeight="semibold"
                        fontFamily="'Poppins', sans-serif"
                        color={colorMode === "light" ? "gray.800" : "gray.200"}
                    >
                        OJASVA TOMAR
                    </Text>
                )}
                <Menu>
                    <MenuButton as={Avatar} name="User Name" src={avatar} />
                    <MenuList>
                        <MenuItem>Log-Out</MenuItem>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Result</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    );
};
