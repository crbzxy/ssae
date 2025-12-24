'use client'

import {
  chakra,
  useMultiStyleConfig,
  omitThemingProps,
  Container,
  ThemingProps,
  StyleProps,
  HTMLChakraProps,
} from '@chakra-ui/react'

export interface SectionProps
  extends HTMLChakraProps<'div'>,
    ThemingProps<'Section'> {
  children: React.ReactNode
  innerWidth?: StyleProps['width']
}

export const Section: React.FC<SectionProps> = (props) => {
  const { children, innerWidth = 'container.lg', className, ...rest } = props
  const styles = useMultiStyleConfig('Section', rest)

  const ownProps = omitThemingProps(rest)

  return (
    <chakra.div __css={styles.container || styles} {...ownProps}>
      <Container height="full" maxW={innerWidth}>
        {children}
      </Container>
    </chakra.div>
  )
}
