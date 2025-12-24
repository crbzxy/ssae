'use client'

import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

/**
 * Tipos (para mantener el config sólido y auto-documentado)
 */
type HeaderLink =
  | { id: string; label: string }
  | { label: string; href: string; variant?: 'primary' | 'secondary' | 'ghost' }

type FooterLink = { href: string; label: React.ReactNode }

type SignupFeature = {
  icon: React.ComponentType<any>
  title: string
  description: string
}

type SEOProps = {
  title: string
  description: string
  additionalMetaTags?: Array<{ name: string; content: string }>
  openGraph?: {
    type?: string
    locale?: string
    siteName?: string
    title?: string
    description?: string
    url?: string
  }
  twitter?: {
    cardType?: string
  }
}

type SiteConfig = {
  logo: any
  seo: SEOProps
  termsUrl: string
  privacyUrl: string
  header: {
    links: HeaderLink[]
  }
  footer: {
    copyright: React.ReactNode
    links: FooterLink[]
  }
  signup: {
    title: string
    features: SignupFeature[]
  }
}

const siteConfig = {
  logo: Logo,

  seo: {
    title: 'SAE | Ingeniería Audiovisual y Producción de Eventos Corporativos',
    description:
      'Especialistas en sistemas parlamentarios, traducción simultánea, broadcast, audio profesional y producción técnica para gobierno y televisoras. Más de 20 años de experiencia.',
    additionalMetaTags: [
      {
        name: 'keywords',
        content:
          'sistemas parlamentarios, traducción simultánea, renta de audio cdmx, producción de eventos híbridos, broadcast services, pantallas led, audio profesional, producción técnica audiovisual, eventos corporativos, gobierno, televisoras',
      },
    ],
    openGraph: {
      type: 'website',
      locale: 'es_MX',
      siteName: 'SAE México',
      title: 'SAE | Ingeniería Audiovisual y Producción de Eventos Corporativos',
      description:
        'Especialistas en sistemas parlamentarios, traducción simultánea, broadcast, audio profesional y producción técnica para gobierno y televisoras. Más de 20 años de experiencia.',
      url: 'https://www.serviciosae.com.mx',
    },
    twitter: {
      cardType: 'summary_large_image',
    },
  } as SEOProps,

  termsUrl: '/terminos',
  privacyUrl: '/aviso-de-privacidad',

  header: {
    links: [
      { id: 'home', label: 'SAE' },
      { id: 'servicios', label: 'SERVICIOS' },
      { id: 'contacto', label: 'CONTACTO' },
    ],
  },

  footer: {
    copyright: (
      <>
        © {new Date().getFullYear()} Servicios, Audio y Espectáculos, S.A. de C.V. Todos los derechos reservados.
        <br />
        Trigo 58-A, Granjas Esmeralda, Iztapalapa, CDMX
        <br />
        Tel: (55) 66 10 34 92 · Email:{' '}
        <Link href="mailto:contacto@serviciosae.com.mx">contacto@serviciosae.com.mx</Link>
        <br />
        <Link href="/" aria-label="Inicio">Inicio</Link> ·{' '}
        <Link href="#servicios" aria-label="Servicios">Servicios</Link> ·{' '}
        <Link href="/aviso-de-privacidad" aria-label="Aviso de Privacidad">
          Aviso de Privacidad
        </Link>{' '}
        · <Link href="#contacto" aria-label="Contacto">Contacto</Link>
      </>
    ),

    links: [
      {
        href: 'https://www.instagram.com/serviciosae',
        label: <FaInstagram size="16" aria-label="Instagram" />,
      },
      {
        href: 'https://www.facebook.com/serviciosae',
        label: <FaFacebook size="16" aria-label="Facebook" />,
      },
    ],
  },

  signup: {
    title: 'Solicita una cotización técnica',
    features: [
      {
        icon: FiCheck,
        title: 'Sistemas parlamentarios y conferencias institucionales',
        description:
          'Soluciones para votación, micrófonos de conferencia y operación en sesiones críticas.',
      },
      {
        icon: FiCheck,
        title: 'Traducción simultánea y comunicación',
        description:
          'Cabinas, receptores, audio multicanal y soporte para cumbres y eventos internacionales.',
      },
      {
        icon: FiCheck,
        title: 'Broadcast, streaming y eventos híbridos',
        description:
          'Producción técnica para transmisión: video, audio, iluminación y redundancias.',
      },
      {
        icon: FiCheck,
        title: 'Pantallas LED, audio y video profesional',
        description:
          'Integración de equipos, operación y soporte en sitio para eventos corporativos y masivos.',
      },
    ],
  },
} satisfies SiteConfig

export default siteConfig
