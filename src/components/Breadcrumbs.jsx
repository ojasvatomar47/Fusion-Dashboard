import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from "@chakra-ui/react";

export const Breadcrumbs = () => (
    <Box
        p="5"
        overflowX="auto"  // Allow horizontal scrolling if needed
        overflowY="hidden"  // Prevent vertical scrolling
        maxW="container.lg"  // Set a maximum width for the container
    >
        <Breadcrumb
            spacing="12px"  // Adjust spacing between breadcrumb items
            separator=">"
            display="flex"
            flexWrap="wrap"  // Allow wrapping if necessary
            alignItems="center"
            width="100%"  // Ensure the breadcrumb takes full width available
        >
            <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href="/modules">Modules</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href="/modules/academics">Academics</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href="/modules/academics/courses">Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href="/modules/academics/courses/intro">Introduction</BreadcrumbLink>
            </BreadcrumbItem>
            {/* Add more BreadcrumbItems as needed */}
        </Breadcrumb>
    </Box>
);
