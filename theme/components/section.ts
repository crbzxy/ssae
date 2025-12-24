const Section = {
  baseStyle: {
    pt: { base: 10, md: 16, lg: 20 },
    pb: { base: 10, md: 16, lg: 20 },
    px: { base: 4, md: 6, lg: 8 },
  },
  variants: {
    subtle: {},
    solid: {
      bg: 'primary.400',
    },
    alternate: ({ colorMode }: any) => ({
      bg: colorMode === 'dark' ? 'gray.800' : 'gray.50',
    }),
  },
  defaultProps: {
    variant: 'subtle',
  },
}

export default Section
