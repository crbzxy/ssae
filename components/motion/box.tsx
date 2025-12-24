'use client'

import { Box, BoxProps } from '@chakra-ui/react'
import { HTMLMotionProps, motion } from 'framer-motion'
import * as React from 'react'

export type MotionBoxProps = Omit<BoxProps, 'transition' | 'as'> &
  Omit<HTMLMotionProps<'div'>, 'children' | 'style'> & {
    children?: React.ReactNode
  }

// Crear un componente motion usando Box de Chakra con motion.div
export const MotionBox = React.forwardRef<HTMLDivElement, MotionBoxProps>(
  (props, ref) => {
    const { children, transition, ...rest } = props
    return (
      <Box
        as={motion.div}
        ref={ref}
        transition={transition}
        {...(rest as any)}
      >
        {children}
      </Box>
    )
  },
)

MotionBox.displayName = 'MotionBox'
