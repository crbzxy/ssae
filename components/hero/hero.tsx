import { Container, Flex, FlexProps, Text, VStack } from '@chakra-ui/react'

interface HeroProps extends Omit<FlexProps, 'title'> {
  title: string | React.ReactNode
  description?: string | React.ReactNode
}

export const Hero = ({ title, description, children, ...rest }: HeroProps) => {
  return (
    <Flex py={{ base: 8, md: 12, lg: 20 }} alignItems="center" {...rest}>
      <Container px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 4, md: 6, lg: 8 }} alignItems="flex-start" width="100%">
          <Text 
            as="h1" 
            textStyle="h1" 
            textAlign="left"
          >
            {title}
          </Text>
          <Text
            as="div"
            textStyle="subtitle"
            align="left"
            color="gray.500"
            _dark={{ color: 'gray.400' }}
            width="100%"
          >
            {description}
          </Text>
        </VStack>
        {children}
      </Container>
    </Flex>
  )
}
