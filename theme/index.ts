import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { brandColors, colorModeConfig, semanticColors } from './foundations/colors'
import { fontSizes } from './foundations/typography'

export const theme = extendTheme(
  {
    config: {
      initialColorMode: colorModeConfig.initialColorMode,
      useSystemColorMode: colorModeConfig.useSystemColorMode,
    },
    colors: {
      primary: brandColors.primary,
      secondary: brandColors.secondary,
    },
    styles: {
      global: (props: any) => ({
        body: {
          color: props.colorMode === 'light' ? semanticColors.text.primary.light : semanticColors.text.primary.dark,
          bg: props.colorMode === 'light' ? semanticColors.background.primary.light : semanticColors.background.primary.dark,
          fontSize: 'lg',
        },
      }),
    },
    fonts: {
      heading: 'Inter Variable, Inter, sans-serif',
      body: 'Inter Variable, Inter, sans-serif',
    },
    fontSizes,
    textStyles: {
      h1: {
        fontSize: { base: '2xl', md: '3xl', lg: '4xl', xl: '5xl', '2xl': '6xl' },
        fontWeight: 'bold',
        lineHeight: 'shorter',
        letterSpacing: '-0.02em',
      },
      h2: {
        fontSize: { base: 'xl', md: '2xl', lg: '3xl', xl: '4xl' },
        fontWeight: 'bold',
        lineHeight: 'shorter',
        letterSpacing: '-0.01em',
      },
      h3: {
        fontSize: { base: 'lg', md: 'xl', lg: '2xl', xl: '3xl' },
        fontWeight: 'semibold',
        lineHeight: 'shorter',
      },
      h4: {
        fontSize: { base: 'md', md: 'lg', lg: 'xl', xl: '2xl' },
        fontWeight: 'semibold',
        lineHeight: 'shorter',
      },
      h5: {
        fontSize: { base: 'sm', md: 'md', lg: 'lg', xl: 'xl' },
        fontWeight: 'semibold',
        lineHeight: 'normal',
      },
      h6: {
        fontSize: { base: 'xs', md: 'sm', lg: 'md', xl: 'lg' },
        fontWeight: 'semibold',
        lineHeight: 'normal',
      },
      subtitle: {
        fontSize: { base: 'md', md: 'lg', lg: 'xl' },
        fontWeight: 'normal',
        lineHeight: 'tall',
      },
      body: {
        fontSize: { base: 'sm', md: 'md', lg: 'lg' },
        fontWeight: 'normal',
        lineHeight: 'tall',
      },
      small: {
        fontSize: { base: 'xs', md: 'sm' },
        fontWeight: 'normal',
        lineHeight: 'normal',
      },
    },
    components,
  },
  baseTheme,
)
