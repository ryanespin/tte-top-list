import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Flex, FlexProps, Heading, HStack, Spacer, VStack } from '@chakra-ui/react'

interface DefaultLayoutProps extends FlexProps {
  pageTitle: string;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props: DefaultLayoutProps) => {
  const { children, pageTitle, ...otherProps } = props;
  return (
    <Flex flexDirection="column" height="100vh" width="100vw">
      <HStack bg="white" p={4}>
        <Image alt="Tabletop Express Logo" src="./ttexpress-circle-logo.png" height={60} width={60} />
        <Heading>Tabletop Express</Heading>
        <Spacer />
        <Heading>{pageTitle}</Heading>
      </HStack>
      <Flex flex={1} maxHeight="calc(100vh - 92px)" {...otherProps}>
        {children}
      </Flex>
    </Flex>
  )
}
