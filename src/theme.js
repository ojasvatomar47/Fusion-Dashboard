// src/theme.js
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const customTheme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: mode("gray.50", "gray.900")(props),
                color: mode("gray.800", "gray.200")(props),
            },
        }),
    },
    components: {
        Button: {
            baseStyle: (props) => ({
                bg: mode("blue.500", "blue.300")(props),
            }),
        },
    },
    colors: {
        brand: {
            50: "#f5f7ff",
            100: "#d8def5",
            200: "#bcc7eb",
            300: "#a0afe1",
            400: "#8497d7",
            500: "#687fcf",
            600: "#5366a6",
            700: "#3f4d7c",
            800: "#2a3452",
            900: "#151a29",
        },
    },
});

export default customTheme;
