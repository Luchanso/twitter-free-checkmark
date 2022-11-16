import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({ initialColorMode: "dark" });

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Analytics />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
