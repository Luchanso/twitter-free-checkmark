import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Link,
    Text,
} from "@chakra-ui/react";
import Head from "next/head";
import ImageLogo from "next/image";
import Script from "next/script";
import { DefaultSeo } from "next-seo";

export default function Home() {
    return (
        <>
            <DefaultSeo
                title="Free Twitter Blue Checkmark"
                description="Create free twitter blue checkmark for your twitter profile"
                openGraph={{
                    type: "website",
                    title: "Free Twitter Blue Checkmark",
                    description:
                        "Create free twitter blue checkmark for your twitter profile",
                    url: "https://twitter-free-checkmark.vercel.app",
                    siteName: "Free Twitter Blue Checkmark",
                    images: [
                        {
                            url: "https://twitter-free-checkmark.vercel.app/preview.png",
                            width: 919,
                            height: 481,
                            alt: "Figma screenshot",
                        },
                    ],
                }}
                twitter={{
                    cardType: "summary_large_image",
                }}
            />
            <Container
                maxW="container.lg"
                // h="100vh"
                display="flex"
                flexDir="column"
                // justifyContent="space-between"
                // alignItems="center"
            >
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-M9Y2QG3112"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){window.dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', 'G-M9Y2QG3112');
                    `}
                </Script>

                <Flex
                    as="main"
                    mt="24"
                    justifyContent="center"
                    alignItems="center"
                    flexDir="column"
                >
                    <Heading
                        fontSize={["60px", "80px"]}
                        background="linear-gradient(45deg,#f83a3a 10%,#f13dd4 50%,#7000ff 90%)"
                        backgroundClip="text"
                        fill="transparent"
                        textAlign="center"
                        mb="4"
                    >
                        Free Twitter
                        <br /> Blue Checkmark
                    </Heading>
                    <Flex
                        width="100%"
                        justifyContent="center"
                        alignItems="center"
                    >
                        Made by{" "}
                        <Link
                            mx="1"
                            color="twitter.400"
                            href="https://twitter.com/luchanso"
                            target="_blank"
                        >
                            @luchanso
                        </Link>
                        &{" "}
                        <Link
                            mx="1"
                            color="twitter.400"
                            href="https://twitter.com/1rchv"
                            target="_blank"
                        >
                            @1rchv
                        </Link>
                    </Flex>
                    <Link
                        target="_blank"
                        href="https://www.figma.com/file/DI8yG9e9ZDRlZ65GoV9oVh/TwitterCheckMark?node-id=0%3A1&t=N4O80ETVw50i1lgt-1"
                        _hover={{
                            textDecor: "inherit",
                        }}
                        my="24"
                    >
                        <Button color="twitter.400" variant="solid" size="lg">
                            Open in Figma
                        </Button>
                    </Link>
                </Flex>
                <Image src="/screen.png" alt="screenshot" mb="16" />

                <Heading as="h2">Instruction</Heading>
                <Image
                    loading="lazy"
                    src="/instructions/step1.png"
                    alt="instruction"
                    my="4"
                />
                <Image
                    loading="lazy"
                    src="/instructions/step2.png"
                    alt="instruction"
                    my="4"
                />
                <Image
                    loading="lazy"
                    src="/instructions/step3.png"
                    alt="instruction"
                    my="4"
                />
                <Link
                    textAlign="center"
                    target="_blank"
                    href="https://www.figma.com/file/DI8yG9e9ZDRlZ65GoV9oVh/TwitterCheckMark?node-id=0%3A1&t=N4O80ETVw50i1lgt-1"
                    _hover={{
                        textDecor: "inherit",
                    }}
                    my="24"
                >
                    <Button color="twitter.400" variant="solid" size="lg">
                        Open in Figma
                    </Button>
                </Link>
            </Container>
            <Flex as="footer" p="3" m="0" h="16">
                <Link
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    flexShrink="0"
                >
                    <Text>Powered by</Text>
                    <span>
                        <ImageLogo
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </Link>
            </Flex>
        </>
    );
}
