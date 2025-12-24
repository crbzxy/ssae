'use client'

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export interface TestimonialProps extends CardProps {
  cliente: string;
  sector: React.ReactNode;
  logo: string;
  href?: string;
  children?: React.ReactNode;
}

export const Testimonial = ({
  cliente,
  sector,
  logo,
  href,
  children,
  ...rest
}: TestimonialProps) => {
  return (
    <Card position="relative" {...rest} width="100%">
      <CardHeader display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
        <Box
          position="relative"
          width={{ base: '40px', md: '48px' }}
          height={{ base: '40px', md: '48px' }}
          borderRadius="md"
          bg="white"
          p="2"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          flexShrink={0}
        >
          <Image
            src={logo}
            alt={`Logo de ${cliente}`}
            width={40}
            height={40}
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <Stack spacing="1" ms={{ base: 0, sm: 4 }} mt={{ base: 2, sm: 0 }}>
          <Heading as="h4" textStyle="h4">{cliente}</Heading>
          <Text color="muted" size="xs">
            {sector}
          </Text>
        </Stack>
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
};
