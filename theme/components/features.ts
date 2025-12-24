import { transparentize, mode } from '@chakra-ui/theme-tools'

const Features = {
  parts: ['container', 'title', 'description', 'icon'],
  baseStyle: {
    container: {
      align: 'flex-start',
      direction: 'row',
    },
    title: {
      as: 'h4',
      textStyle: 'h4',
      mb: 2,
    },
    description: {
      fontSize: 'md',
      color: 'gray.400',
    },
    icon: {
      mb: 3,
      mr: 3,
      p: 2,
      bg: 'primary.400',
      color: 'white',
      float: 'left',
    },
  },
  variants: {
    subtle: {},
    solid: {
      container: {
        bg: 'primary.400',
      },
      secondaryAction: {
        colorScheme: 'white',
      },
    },
    light: ({ colorMode }: any) => ({
      container: {
        bg: colorMode === 'dark' ? 'gray.700' : 'gray.100',
      },
    }),
  },
  defaultProps: {
    variant: 'subtle',
  },
}

export const Feature = {
  parts: ['container', 'title', 'description', 'icon'],
  baseStyle: (props: any) => ({
    container: {
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
    title: {
      as: 'h4',
      textStyle: 'h4',
      mb: 2,
    },
    description: {
      fontSize: 'md',
      fontWeight: 'normal',
      color: mode('gray.500', 'gray.400')(props),
      lineHeight: 'tall',
    },
    icon: {
      mb: 4,
      mr: 4,
      p: 2,
      bg: mode(
        'primary.100',
        transparentize('primary.500', 0.2)(props.theme)
      )(props),
      color: mode('primary.700', 'primary.400')(props),
      float: 'left',
    },
  }),
  variants: {
    default: {},
    'left-icon': {
      container: {
        flexDirection: 'row',
      },
    },
    center: {
      container: {
        alignItems: 'center',
      },
      title: {
        textAlign: 'center',
      },
      description: {
        textAlign: 'center',
      },
    },
    inline: {
      container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        spacing: 3,
        p: { base: 5, md: 6, lg: 8 },
        borderRadius: 'md',
        bg: 'whiteAlpha.600',
        border: '2px solid',
        borderColor: 'gray.300',
        _dark: {
          bg: 'blackAlpha.300',
          borderColor: 'gray.700',
        },
        minH: { base: 'auto', md: '200px' },
        transition: 'all 0.2s',
        _hover: {
          bg: 'whiteAlpha.700',
          _dark: { bg: 'blackAlpha.400' },
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        },
      },
      title: {
        display: 'block',
        mb: 2,
        textStyle: 'h4',
      },
      description: {
        display: 'block',
        fontSize: { base: 'sm', md: 'md' },
        lineHeight: 'tall',
      },
      icon: {
        mb: 3,
        mt: 0,
      },
    },
    light: ({ colorMode }: any) => ({
      wrapper: {
        bg: colorMode === 'dark' ? 'gray.700' : 'gray.100',
      },
    }),
  },
  defaultProps: {
    variant: 'default',
  },
}

export default Features
