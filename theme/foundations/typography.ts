/**
 * Tamaños de fuente base
 * Estos tamaños se usan como referencia para los headings y texto
 */
export const fontSizes = {
  xs: '0.75rem',      // 12px
  sm: '0.8125rem',    // 13px
  md: '0.875rem',     // 14px
  lg: '1rem',         // 16px - Base
  xl: '1.125rem',     // 18px
  '2xl': '1.25rem',   // 20px
  '3xl': '1.5rem',    // 24px
  '4xl': '1.875rem',  // 30px
  '5xl': '2.25rem',   // 36px
  '6xl': '3rem',      // 48px
  '7xl': '3.75rem',   // 60px
  '8xl': '4.5rem',    // 72px
  '9xl': '6rem',      // 96px
}

/**
 * Configuración de Text Styles
 * Define estilos de texto reutilizables con jerarquía clara
 */
export const textStyles = {
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
}
