import { mode } from '@chakra-ui/theme-tools'

const SectionTitle = {
  parts: ['wrapper', 'title', 'description'],
  baseStyle: {
    wrapper: {
      spacing: [2, null, 3],
      mb: { base: 6, md: 8, lg: 10 },
      textAlign: ['left', null, 'center'],
    },
    title: {
      width: '100%',
      textStyle: 'h2',
    },
    description: {
      fontWeight: 'normal',
      textStyle: 'subtitle',
    },
  },
  variants: {
    default: (props: any) => ({
      title: {},
      description: {
        color: mode('gray.500', 'gray.400')(props),
      },
    }),
    dark: {
      title: {
        color: 'gray.800',
      },
      description: {
        color: 'gray.700',
      },
    },
    light: (props: any) => ({
      title: {
        color: 'white',
      },
      description: {
        color: 'gray.200',
      },
    }),
  },
  defaultProps: {
    variant: 'default',
    size: 'xl',
  },
  sizes: {
    lg: {
      title: {
        size: '2xl',
      },
      description: {
        fontSize: 'xl',
      },
    },
    xl: {
      wrapper: {
        mb: { base: 6, md: 10, lg: 14 },
        spacing: { base: 2, md: 3 },
      },
      title: {
        textStyle: 'h2',
      },
      description: {
        textStyle: 'subtitle',
      },
    },
  },
}

export default SectionTitle
