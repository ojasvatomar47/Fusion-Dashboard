import { Box, Text, Divider, Flex, useMediaQuery, useColorMode, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

const notifications = [
    { title: 'Hackbyte Event', description: 'Hackbyte event by BitByte Club will be organised in CR102 -by PRIYANSH MEHTA', date: 'Aug 25, 2024', time: '10:00 AM' },
    { title: 'Bitbyte session', description: 'A session by BitByte Club will be organised in CR101 -by PRIYANSH MEHTA', date: 'Aug 24, 2024', time: '2:00 PM' },
    { title: 'Library Closure', description: 'The library will be closed for maintenance on the 15th -by Ravi Kumar', date: 'Aug 23, 2024', time: '9:00 AM' },
    { title: 'Seminar on AI', description: 'A seminar on AI will be held in the auditorium -by Dr. Rakesh Sharma', date: 'Aug 22, 2024', time: '11:00 AM' },
    { title: 'Workshop on Python', description: 'A Python workshop is scheduled in Lab 4 -by Nidhi Agarwal', date: 'Aug 21, 2024', time: '3:00 PM' },
    { title: 'Sports Day', description: 'Annual sports day will be held on the 20th -by Arjun Singh', date: 'Aug 20, 2024', time: '1:00 PM' },
    { title: 'Music Fest', description: 'The music fest will be conducted in the open ground -by Rohit Sharma', date: 'Aug 19, 2024', time: '5:00 PM' },
    { title: 'Blood Donation Camp', description: 'A blood donation camp will be organized in the main hall -by Dr. Anil Gupta', date: 'Aug 18, 2024', time: '10:00 AM' },
    { title: 'Chess Tournament', description: 'Inter-department chess tournament will be held in CR203 -by Aditya Mishra', date: 'Aug 17, 2024', time: '4:00 PM' },
    { title: 'Tree Plantation Drive', description: 'Join us for a tree plantation drive in the campus -by Neha Kapoor', date: 'Aug 16, 2024', time: '8:00 AM' },
    { title: 'Code Sprint', description: 'Participate in the coding sprint at Lab 1 -by Shreya Jain', date: 'Aug 15, 2024', time: '6:00 PM' },
];

const announcements = [
    { title: 'Quiz', description: 'Quiz -by Prof. Atul Gupta', date: 'Aug 25, 2024', time: '9:00 AM' },
    { title: 'Course Announcement', description: 'Course -by Prof. Atul Gupta', date: 'Aug 24, 2024', time: '11:00 AM' },
    { title: 'Test Announcement', description: 'Test announcement -by Prakash Kumar', date: 'Aug 23, 2024', time: '1:00 PM' },
    { title: 'Healthcare Announcement', description: 'New PHC Doctor -by Prakash Kumar', date: 'Aug 22, 2024', time: '10:00 AM' },
    { title: 'Holiday Announcement', description: 'Holiday on 25th for Diwali -by Administration', date: 'Aug 21, 2024', time: '4:00 PM' },
    { title: 'Placement Drive', description: 'Placement drive on 30th -by Placement Cell', date: 'Aug 20, 2024', time: '2:00 PM' },
    { title: 'Internship Opportunities', description: 'New internships available -by Career Services', date: 'Aug 19, 2024', time: '12:00 PM' },
    { title: 'New Course Launch', description: 'Launch of Data Science course -by Prof. Kiran', date: 'Aug 18, 2024', time: '3:00 PM' },
    { title: 'Fee Payment Deadline', description: 'Fee payment deadline is 15th -by Accounts Department', date: 'Aug 17, 2024', time: '5:00 PM' },
    { title: 'Cultural Fest', description: 'Annual cultural fest to be held on 10th -by Cultural Committee', date: 'Aug 16, 2024', time: '9:00 AM' },
    { title: 'Library Timings', description: 'Library will now be open from 8 AM to 10 PM -by Library Staff', date: 'Aug 15, 2024', time: '8:00 AM' },
];

export const MainPage = () => {
    const [isTabletOrSmaller] = useMediaQuery("(max-width: 768px)");
    const { colorMode } = useColorMode();

    const bgColor = colorMode === 'light' ? 'gray.200' : 'gray.700';
    const altBgColor = colorMode === 'light' ? 'gray.300' : 'gray.600';
    const textColor = colorMode === 'light' ? 'gray.600' : 'gray.300';
    const boxBgColor = colorMode === 'light' ? 'white' : 'gray.800';
    const activeTabBgColor = colorMode === 'light' ? 'gray.500' : 'gray.400';  // Background color for active tab
    const tabTextColor = colorMode === 'light' ? 'white' : 'black';  // Text color for active tab

    return (
        <Box flex="1" p="4" mt={isTabletOrSmaller ? "0" : "4"}>
            <Box mb="6">
                <Text fontSize="2xl" fontWeight="bold" mb="4">Recently Visited Modules</Text>
                <Box display="flex" flexWrap="wrap" gap="4">
                    <Box fontStyle="italic" flex="1" p="2" bg={bgColor} borderRadius="md" mx="1" minW="200px">Academics</Box>
                    <Box fontStyle="italic" flex="1" p="2" bg={bgColor} borderRadius="md" mx="1" minW="200px">Mess Management</Box>
                    <Box fontStyle="italic" flex="1" p="2" bg={bgColor} borderRadius="md" mx="1" minW="200px">Placement Cell</Box>
                </Box>
            </Box>

            <Tabs variant="enclosed" isFitted>
                <TabList>
                    <Tab
                        _selected={{ bg: activeTabBgColor, color: tabTextColor }}
                        fontSize={isTabletOrSmaller ? "small" : "lg"}
                        isTruncated={isTabletOrSmaller}
                        fontWeight="bold"
                        textTransform="uppercase"
                    >
                        Notifications
                    </Tab>
                    <Tab
                        _selected={{ bg: activeTabBgColor, color: tabTextColor }}
                        fontSize={isTabletOrSmaller ? "small" : "lg"}
                        isTruncated={isTabletOrSmaller}
                        fontWeight="bold"
                        textTransform="uppercase"
                    >
                        Announcements
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel p="0">
                        <Box flex="1" p="4" bg={boxBgColor} borderRadius="md" overflowY="auto" maxH="400px">
                            {notifications.map((notification, index) => (
                                <Box
                                    key={index}
                                    mb="4"
                                    bg={index % 2 === 0 ? bgColor : altBgColor}
                                    p="4"
                                    borderRadius="md"
                                >
                                    <Box
                                        display="flex"
                                        flexDirection={isTabletOrSmaller ? "column" : "row"}
                                        justifyContent="space-between"
                                    >
                                        <Text
                                            fontWeight="bold"
                                            isTruncated={isTabletOrSmaller}
                                            noOfLines={1}
                                        >
                                            {notification.title}
                                        </Text>
                                        <Text
                                            fontSize="sm"
                                            fontStyle="oblique"
                                            color={textColor}
                                            mt={isTabletOrSmaller ? "2" : "0"}
                                            isTruncated={isTabletOrSmaller}
                                        >
                                            {`${notification.date} at ${notification.time}`}
                                        </Text>
                                    </Box>
                                    <Text
                                        isTruncated={isTabletOrSmaller}
                                        fontStyle="italic"
                                        noOfLines={2}
                                    >
                                        {notification.description}
                                    </Text>
                                    {index < notifications.length - 1 && <Divider mt="4" />}
                                </Box>
                            ))}
                        </Box>
                    </TabPanel>

                    <TabPanel p="0">
                        <Box flex="1" p="4" bg={boxBgColor} borderRadius="md" overflowY="auto" maxH="400px">
                            {announcements.map((announcement, index) => (
                                <Box
                                    key={index}
                                    mb="4"
                                    bg={index % 2 === 0 ? bgColor : altBgColor}
                                    p="4"
                                    borderRadius="md"
                                >
                                    <Box
                                        display="flex"
                                        flexDirection={isTabletOrSmaller ? "column" : "row"}
                                        justifyContent="space-between"
                                    >
                                        <Text
                                            fontWeight="bold"
                                            isTruncated={isTabletOrSmaller}
                                            noOfLines={1}
                                        >
                                            {announcement.title}
                                        </Text>
                                        <Text
                                            fontSize="sm"
                                            fontStyle="oblique"
                                            color={textColor}
                                            mt={isTabletOrSmaller ? "2" : "0"}
                                            isTruncated={isTabletOrSmaller}
                                        >
                                            {`${announcement.date} at ${announcement.time}`}
                                        </Text>
                                    </Box>
                                    <Text
                                        isTruncated={isTabletOrSmaller}
                                        fontStyle="italic"
                                        noOfLines={2}
                                    >
                                        {announcement.description}
                                    </Text>
                                    {index < announcements.length - 1 && <Divider mt="4" />}
                                </Box>
                            ))}
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};