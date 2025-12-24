import {
  Box,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'

import React from 'react'

import {
  ButtonLink,
  ButtonLinkProps,
} from '#components/button-link/button-link'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Section, SectionProps, SectionTitle } from '#components/section'

export interface ServicioPlan {
  id: string
  title: React.ReactNode
  description: React.ReactNode
  price?: React.ReactNode
  capacidades: Array<PricingFeatureProps | null>
  action: ButtonLinkProps & { label?: string }
  isDestacado?: boolean
}

export interface ServiciosProps extends SectionProps {
  description: React.ReactNode
  servicios: Array<ServicioPlan>
  cta?: ButtonLinkProps & { label?: string }
}

export const Pricing: React.FC<ServiciosProps> = (props) => {
  const { children, servicios, title, description, cta, ...rest } = props

  return (
    <Section id="servicios" pos="relative" innerWidth="container.2xl" {...rest}>
      <BackgroundGradient height="100%" />
      <Box zIndex="2" pos="relative" width="100%">
        <SectionTitle title={title} description={description}></SectionTitle>

        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={{ base: 4, md: 6, lg: 8 }}
          width="100%"
        >
          {servicios?.map((servicio) => (
            <PricingBox
              key={servicio.id}
              title={servicio.title}
              description={servicio.description}
              price={servicio.price}
              sx={
                servicio.isDestacado
                  ? {
                      borderColor: 'primary.500',
                      _dark: {
                        borderColor: 'primary.500',
                        bg: 'blackAlpha.300',
                      },
                    }
                  : {}
              }
            >
              <PricingFeatures>
                {servicio.capacidades.map((capacidad, i) =>
                  capacidad ? (
                    <PricingFeature key={i} {...capacidad} />
                  ) : (
                    <br key={i} />
                  ),
                )}
              </PricingFeatures>
            </PricingBox>
          ))}
        </SimpleGrid>

        {cta && (
          <Box mt={{ base: 8, md: 10 }} textAlign="center" width="100%">
            <ButtonLink 
              colorScheme="primary" 
              size="lg"
              {...cta}
            >
              {cta.label || 'Contactar'}
            </ButtonLink>
          </Box>
        )}

        {children && (
          <Box mt={{ base: 6, md: 8 }} textAlign="center" width="100%">
            {children}
          </Box>
        )}
      </Box>
    </Section>
  )
}

const PricingFeatures: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <VStack
      align="stretch"
      justifyContent="flex-start"
      spacing="3"
      mb="4"
      flex="1"
      minH="150px"
    >
      {children}
    </VStack>
  )
}

export interface PricingFeatureProps {
  title: React.ReactNode
  iconColor?: string
}

const PricingFeature: React.FC<PricingFeatureProps> = (props) => {
  const { title, iconColor = 'primary.500' } = props
  return (
    <HStack>
      <Icon as={FiCheck} color={iconColor} />
      <Text flex="1" fontSize="sm">
        {title}
      </Text>
    </HStack>
  )
}

export interface PricingBoxProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  description: React.ReactNode
  price?: React.ReactNode
}

const PricingBox: React.FC<PricingBoxProps> = (props) => {
  const { title, description, price, children, ...rest } = props
  return (
    <VStack
      zIndex="2"
      bg="whiteAlpha.600"
      borderRadius="md"
      p={{ base: 5, md: 6, lg: 8 }}
      flex="1 0"
      alignItems="stretch"
      border="2px solid"
      borderColor="gray.300"
      _dark={{
        bg: 'blackAlpha.300',
        borderColor: 'gray.700',
      }}
      width="100%"
      height="100%"
      minH={{ base: 'auto', md: '420px' }}
      {...rest}
    >
      <Heading 
        as="h3" 
        textStyle="h3"
        mb="2"
      >
        {title}
      </Heading>
      <Box color="muted" mb="4" fontSize={{ base: 'sm', md: 'md' }}>
        {description}
      </Box>
      {price && (
        <Box fontSize="2xl" fontWeight="bold" py="4">
          {price}
        </Box>
      )}
      <VStack align="stretch" justifyContent="flex-start" spacing="4" flex="1">
        {children}
      </VStack>
    </VStack>
  )
}
