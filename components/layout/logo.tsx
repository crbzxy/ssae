'use client'

import { Box, Flex, Heading, VisuallyHidden } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'

import * as React from 'react'

import siteConfig from '#data/config'

export interface LogoProps {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  const LogoComponent = siteConfig.logo

  return (
    <Flex h="12" flexShrink="0" alignItems="center">
      <Link
        href={href}
        display="flex"
        alignItems="center"
        p="1"
        borderRadius="sm"
        onClick={onClick}
        _hover={{ opacity: 0.8 }}
        transition="opacity 0.2s"
      >
        {LogoComponent ? (
          <LogoComponent width={140} height={45} />
        ) : (
          <Heading as="h1" size="md">
            {siteConfig.seo?.title}
          </Heading>
        )}
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  )
}
