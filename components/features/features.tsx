'use client'

import * as React from 'react'
import {
  Box,
  Stack,
  VStack,
  SimpleGrid,
  Heading,
  Text,
  Icon,
  Circle,
  ResponsiveValue,
  useMultiStyleConfig,
  ThemingProps,
  SystemProps,
} from '@chakra-ui/react'

import { Section, SectionTitle, SectionTitleProps } from 'components/section'
import { BackgroundGradient } from '#components/gradients/background-gradient'

const Revealer = ({ children }: any) => {
  return children
}

export interface FeaturesProps
  extends Omit<SectionTitleProps, 'title' | 'variant'>,
    ThemingProps<'Features'> {
  title?: React.ReactNode
  description?: React.ReactNode
  features: Array<FeatureProps>
  columns?: ResponsiveValue<number>
  spacing?: string | number
  aside?: React.ReactChild
  reveal?: React.FC<any>
  iconSize?: SystemProps['boxSize']
  innerWidth?: SystemProps['maxW']
}

export interface FeatureProps {
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: any
  iconPosition?: 'left' | 'top'
  iconSize?: SystemProps['boxSize']
  ip?: 'left' | 'top'
  variant?: string
  delay?: number
}

export const Feature: React.FC<FeatureProps> = (props) => {
  const {
    title,
    description,
    icon,
    iconPosition,
    iconSize = 8,
    ip,
    variant,
  } = props
  const styles = useMultiStyleConfig('Feature', { variant })

  const pos = iconPosition || ip
  const direction = pos === 'left' ? 'row' : 'column'

  return (
    <Stack sx={styles.container} direction={direction} spacing={3}>
      {icon && (
        <Circle sx={styles.icon}>
          <Icon as={icon} boxSize={iconSize} />
        </Circle>
      )}
      <Box>
        <Heading sx={styles.title} textStyle="h4">{title}</Heading>
        <Text sx={styles.description}>{description}</Text>
      </Box>
    </Stack>
  )
}

export const Features: React.FC<FeaturesProps> = (props) => {
  const {
    title,
    description,
    features,
    columns = [1, 2, 3],
    spacing = 8,
    align: alignProp = 'center',
    iconSize = 8,
    aside,
    reveal: Wrap = Revealer,
    innerWidth,
    ...rest
  } = props

  const align = !!aside ? 'left' : alignProp

  const ip = align === 'left' ? 'left' : 'top'

  return (
    <Section pos="relative" innerWidth={innerWidth} {...rest}>
      <BackgroundGradient height="100%" />
      <Box zIndex="2" pos="relative" width="100%">
        <Stack 
          direction={{ base: 'column', lg: 'row' }} 
          height="full" 
          align="flex-start"
          spacing={{ base: 6, lg: 8 }}
        >
          <VStack flex="1" spacing={[4, null, 8]} alignItems="stretch" width="100%">
            {(title || description) && (
              <Wrap>
                <SectionTitle
                  title={title}
                  description={description}
                  align={align}
                />
              </Wrap>
            )}
          <SimpleGrid columns={columns} spacing={spacing} width="100%">
            {features.map((feature, i) => {
              return (
                <Wrap key={i} delay={feature.delay}>
                  <Feature iconSize={iconSize} {...feature} ip={ip} />
                </Wrap>
              )
            })}
          </SimpleGrid>
        </VStack>
        {aside && (
          <Box flex="1" p={{ base: 4, lg: 8 }} width={{ base: '100%', lg: 'auto' }}>
            {aside}
          </Box>
        )}
      </Stack>
      </Box>
    </Section>
  )
}
