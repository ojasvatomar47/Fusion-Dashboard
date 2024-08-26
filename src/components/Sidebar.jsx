import {
    Box,
    List,
    ListItem,
    Collapse,
    Icon,
    Text,
    Flex,
    Button,
    useMediaQuery,
    useColorMode,
    Collapse as ChakraCollapse
} from "@chakra-ui/react";
import { useState } from "react";
import {
    FaChevronRight,
    FaChevronLeft,
    FaChevronDown,
    FaChevronUp,
    FaBook,
    FaRegNewspaper,
    FaUtensils,
    FaHotel,
    FaHospital,
    FaUniversity,
    FaRegQuestionCircle,
    FaBusinessTime,
    FaUsers,
    FaChalkboardTeacher,
} from "react-icons/fa";

const modules = [
    { name: "Academics", route: "/academics", icon: FaBook, subsections: ["Course 1", "Course 2"] },
    { name: "Programme and Curriculum", route: "/programmeandcurriculum", icon: FaRegNewspaper, subsections: ["Curriculum 1", "Curriculum 2"] },
    { name: "Mess Management", route: "/messmanagement", icon: FaUtensils, subsections: ["Menu", "Feedback"] },
    { name: "Visitor Hostel", route: "/visitorshostel", icon: FaHotel, subsections: ["Booking", "Policies"] },
    { name: "Healthcare Center", route: "/healthcarecenter", icon: FaHospital, subsections: ["Appointments", "Health Records"] },
    { name: "Scholarship Portal", route: "/scholarshipportal", icon: FaUniversity, subsections: ["Applications", "Status"] },
    { name: "Complaint System", route: "/complaintsystem", icon: FaRegQuestionCircle, subsections: ["File Complaint", "Track Complaint"] },
    { name: "Placement Cell", route: "/placementcell", icon: FaBusinessTime, subsections: ["Opportunities", "Statistics"] },
    { name: "Department Portal", route: "/departmentportal", icon: FaUsers, subsections: ["Departments", "Contact"] },
    { name: "Gymkhana", route: "/gymkhana", icon: FaChalkboardTeacher, subsections: ["Events", "Membership"] },
];

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubsection, setOpenSubsection] = useState(null);
    const [isTabletOrSmaller] = useMediaQuery("(max-width: 768px)");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { colorMode } = useColorMode();

    const handleToggleSubsections = (index) => {
        setOpenSubsection(openSubsection === index ? null : index);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <Box
            w={isTabletOrSmaller ? "100%" : (isOpen ? "300px" : "80px")}
            p="4"
            borderRight={isTabletOrSmaller ? "none" : "1px solid"}
            borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
            transition="width 0.3s"
            position={isTabletOrSmaller ? "relative" : "sticky"}
            top={isTabletOrSmaller ? "0px" : "0"}
            bg={colorMode === "light" ? "gray.50" : "gray.900"}
            zIndex={isTabletOrSmaller && isOpen ? "999" : "auto"}
        >
            {isTabletOrSmaller ? (
                <>
                    <Flex mb="4" align="center" justify="space-between">
                        <Text fontSize="lg" fontWeight="bold" color={colorMode === "light" ? "gray.800" : "gray.200"}>MODULES</Text>
                        <Button
                            variant="link"
                            onClick={handleDropdownToggle}
                            p="0" // Remove default padding
                            bg="transparent" // Set background to transparent
                            _hover={{ bg: "transparent" }} // Transparent on hover
                            _focus={{ boxShadow: "none" }} // Remove focus box shadow
                        >
                            <Icon as={isDropdownOpen ? FaChevronUp : FaChevronDown} color={colorMode === "light" ? "gray.800" : "gray.200"} />
                        </Button>
                    </Flex>
                    <ChakraCollapse in={isDropdownOpen}>
                        <List spacing={2}>
                            {modules.map((module, index) => (
                                <ListItem
                                    key={index}
                                    cursor="pointer"
                                    _hover={{ bg: colorMode === "light" ? "gray.100" : "gray.700" }}
                                    p="2"
                                    borderRadius="md"
                                    transition="background 0.2s"
                                >
                                    <Flex direction="column">
                                        <Flex align="center" justify="space-between" onClick={() => handleToggleSubsections(index)}>
                                            <Flex align="center">
                                                <Icon as={module.icon} fontSize="1.5rem" color={colorMode === "light" ? "gray.800" : "gray.200"} />
                                                <Text ml="2" color={colorMode === "light" ? "gray.800" : "gray.200"}>{module.name}</Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </ListItem>
                            ))}
                        </List>
                    </ChakraCollapse>
                </>
            ) : (
                <>
                    <Flex mb="4" align="center" justify={isOpen ? "space-between" : "center"}>
                        {isOpen ? (
                            <>
                                <Text fontSize="lg" fontWeight="bold" color={colorMode === "light" ? "gray.800" : "gray.200"}>MODULES</Text>
                                <Button
                                    variant="link"
                                    onClick={() => setIsOpen(!isOpen)}
                                    p="0" // Remove default padding
                                    bg="transparent" // Set background to transparent
                                    _hover={{ bg: "transparent" }} // Transparent on hover
                                    _focus={{ boxShadow: "none" }} // Remove focus box shadow
                                >
                                    <Icon as={FaChevronLeft} color={colorMode === "light" ? "gray.800" : "gray.200"} />
                                </Button>
                            </>
                        ) : (
                            <Button
                                variant="link"
                                onClick={() => setIsOpen(!isOpen)}
                                p="0" // Remove default padding
                                bg="transparent" // Set background to transparent
                                _hover={{ bg: "transparent" }} // Transparent on hover
                                _focus={{ boxShadow: "none" }} // Remove focus box shadow
                            >
                                <Icon as={FaChevronRight} color={colorMode === "light" ? "gray.800" : "gray.200"} />
                            </Button>
                        )}
                    </Flex>

                    <List spacing={2}>
                        {modules.map((module, index) => (
                            <ListItem
                                key={index}
                                cursor="pointer"
                                _hover={{ bg: colorMode === "light" ? "gray.100" : "gray.700" }}
                                p="2"
                                borderRadius="md"
                                transition="background 0.2s"
                            >
                                <Flex direction="column">
                                    <Flex align="center" justify="space-between" onClick={() => handleToggleSubsections(index)}>
                                        <Flex align="center">
                                            <Icon as={module.icon} fontSize="1.5rem" color={colorMode === "light" ? "gray.800" : "gray.200"} />
                                            {isOpen && <Text ml="2" color={colorMode === "light" ? "gray.800" : "gray.200"}>{module.name}</Text>}
                                        </Flex>
                                        {isOpen && (
                                            <Icon
                                                as={FaChevronDown}
                                                transform={openSubsection === index ? "rotate(180deg)" : "rotate(0deg)"}
                                                color={colorMode === "light" ? "gray.800" : "gray.200"}
                                            />
                                        )}
                                    </Flex>
                                    <Collapse in={openSubsection === index && isOpen} animateOpacity>
                                        <Box mt="2" pl="8" color={colorMode === "light" ? "gray.600" : "gray.300"}>
                                            {module.subsections.map((sub, subIndex) => (
                                                <Text key={subIndex} fontSize="sm">{sub}</Text>
                                            ))}
                                        </Box>
                                    </Collapse>
                                </Flex>
                            </ListItem>
                        ))}
                    </List>
                </>
            )}
        </Box>
    );
};
