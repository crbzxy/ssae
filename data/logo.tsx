'use client'

import { Box, BoxProps } from '@chakra-ui/react'
import Image from 'next/image'

export interface LogoProps extends BoxProps {
  width?: number
  height?: number
}

export const Logo: React.FC<LogoProps> = ({ width = 160, height = 40, ...props }) => {
  return (
    <Box position="relative" width={`${width}px`} height={`${height}px`} {...props}>
      <Image
        src="/static/images/logo.png"
        alt="SAE - Servicios, Audio y Espectáculos"
        width={width}
        height={height}
        style={{ objectFit: 'contain' }}
        priority
      />
    </Box>
  )
}
