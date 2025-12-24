'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
  useColorModeValue,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiPhone,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Section } from '#components/section'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import mision from '#data/mision'
import servicios from '#data/servicios'
import testimonials from '#data/testimonials'
import verticalesMercado from '#data/verticales-mercado'

const Home = () => {
  return (
    <Box>
      <HeroSection />

      {/* <HighlightsSection /> */}

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <ContactSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 20, md: 32, lg: 60 }} pb={{ base: 10, md: 20, lg: 40 }} px={{ base: 4, md: 6 }}>
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Ingeniería Audiovisual
                <Br /> para Eventos que Dejan Huella
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Aliados estratégicos de <Em>televisoras, gobierno y grandes corporativos</Em>.
                <Br /> Transformamos su visión en una experiencia técnica impecable con más de 20 años de respaldo.
                <Br />
                <Text fontSize="sm" color="muted" mt="2">
                  Sistemas Parlamentarios • Broadcast • Audio Profesional
                </Text>
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                spacing={4}
                alignItems={{ base: 'stretch', sm: 'center' }}
                width={{ base: '100%', sm: 'auto' }}
              >
                <ButtonLink
                  colorScheme="primary"
                  size="lg"
                  href="#contacto"
                  width={{ base: '100%', sm: 'auto' }}
                >
                  Solicitar Cotización
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="#servicios"
                  variant="outline"
                  width={{ base: '100%', sm: 'auto' }}
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Ver Servicios
                </ButtonLink>
              </Stack>
            </FallInPlace>
          </Hero>
          <Box
            height={{ base: '400px', md: '500px', lg: '600px' }}
            position={{ base: 'relative', lg: 'absolute' }}
            display={{ base: 'block', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width={{ base: '100%', lg: '80vw' }}
            maxW="1100px"
            margin="0 auto"
            mt={{ base: 8, lg: 0 }}
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/images/home.jpg"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="metodologia"
        columns={{ base: 1, sm: 2, lg: 4 }}
        iconSize={4}
        innerWidth="container.xl"
        pt={{ base: 10, lg: 20 }}
        features={[
          {
            title: 'Colaboración',
            icon: FiSmile,
            description:
              'Realizamos eventos exitosos en estrecha colaboración con nuestros clientes, produciendo relaciones duraderas de confianza y compromiso.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Excelencia',
            icon: FiSliders,
            description:
              'Hacemos de todo en lo que nos involucramos la mejor experiencia posible, brindando las soluciones más adecuadas a cada proyecto.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Integridad',
            icon: FiGrid,
            description:
              'Dirigidos siempre por nuestros principios de honestidad, integridad, compromiso y trabajo en equipo.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Pasión',
            icon: FiThumbsUp,
            description:
              'Somos una empresa formada por gente apasionada por obtener los mejores resultados e impactar positivamente a todas las personas que alcanzamos.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Highlights id="capacidades">
      <HighlightsItem colSpan={[1, null, 2]} title={mision.title}>
        <VStack alignItems="flex-start" spacing="6">
          <Text color={textColor} fontSize="lg" lineHeight="tall">
            {mision.subtitle && (
              <Text as="span" fontWeight="semibold" color="primary.500" fontSize="xl" mb="4" display="block">
                {mision.subtitle}
              </Text>
            )}
            {mision.description}
          </Text>
          <Box mt="4">
            <Heading as="h3" textStyle="h3" mb="4" color={headingColor}>
              {mision.mision.title}
            </Heading>
            <Text color={textColor} fontSize="lg" lineHeight="tall">
              {mision.mision.content}
            </Text>
          </Box>
          <Box mt="4">
            <Heading as="h3" textStyle="h3" mb="4" color={headingColor}>
              {mision.valores.title}
            </Heading>
            <Text color={textColor} fontSize="lg" lineHeight="tall">
              {mision.valores.content}
            </Text>
          </Box>
        </VStack>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  // Mostrar todos los 8 servicios
  return (
    <Features
      id="servicios"
      title={servicios.title}
      description={servicios.description}
      align="left"
      columns={{ base: 1, md: 2, lg: 4 }}
      spacing={8}
      iconSize={4}
      innerWidth="container.2xl"
      features={servicios.servicios.map((servicio) => ({
        title: servicio.title,
        description: servicio.description,
        variant: 'inline',
      }))}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      description={testimonials.description}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing
      title={verticalesMercado.title}
      description={verticalesMercado.description}
      servicios={verticalesMercado.verticales.map((v) => ({
        id: v.id,
        title: v.title,
        description: v.destacado,
        capacidades: v.features.map((f) => ({ title: f.title })),
        action: v.action,
        isDestacado: v.isDestacado,
      }))}
      cta={{
        href: '#contacto',
        label: 'Solicitar cotización',
      }}
    >
      <Text p={{ base: 4, md: 6 }} textAlign="center" color="muted" fontSize={{ base: 'sm', md: 'md' }}>
        Servicios especializados para cada vertical de mercado con protocolos y estándares específicos.
      </Text>
    </Pricing>
  )
}

const ContactSection = () => {
  const textColor = useColorModeValue('gray.800', 'white')

  return (
    <Section id="contacto" pos="relative">
      <BackgroundGradient height="100%" />
      <Box zIndex="2" pos="relative">
        <Container maxW="container.xl" py={{ base: 10, md: 16, lg: 20 }} px={{ base: 4, md: 6 }}>
          <VStack spacing="8" textAlign="center">
            <Heading as="h2" textStyle="h2" color={textColor}>
              Si requiere información contáctenos, ¡Estamos listos para empezar!
            </Heading>
            <HStack spacing="4" fontSize="2xl" fontWeight="bold" color={textColor}>
              <Icon as={FiPhone} />
              <Text as="a" href="tel:+525566103492" color={textColor} _hover={{ color: 'primary.500' }}>
                (55) 66 10 34 92
              </Text>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Section>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
