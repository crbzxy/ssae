'use client'

import { ChakraProps, chakra } from '@chakra-ui/react'
import { HTMLMotionProps, motion } from 'framer-motion'

export interface MotionBoxProps
  extends Omit<HTMLMotionProps<'div'>, 'children' | 'style'>,
    Omit<ChakraProps, 'transition' | 'color'> {
  children?: React.ReactNode
}

// Usar motion() directamente en lugar de motion.create()
export const MotionBox = motion(chakra.div)
