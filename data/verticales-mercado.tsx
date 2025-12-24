export default {
  title: 'Sectores que Confían en SAE',
  description:
    'Servicios especializados para cada vertical de mercado con protocolos y estándares específicos.',
  verticales: [
    {
      id: 'gobierno',
      title: 'Sector Público',
      destacado: 'Protocolo y Seguridad',
      isDestacado: false,
      features: [
        {
          title: 'Sistemas de votación certificada',
        },
        {
          title: 'Traducción simultánea (ISO)',
        },
        {
          title: 'Audio encriptado para gabinetes',
        },
        {
          title: 'Cumplimiento normativo y fiscal',
        },
      ],
      action: {
        href: '#contacto',
        label: 'Más información',
      },
    },
    {
      id: 'broadcast',
      title: 'Broadcast & Media',
      destacado: 'Estándar Televisivo',
      isDestacado: true,
      features: [
        {
          title: 'Renta de equipo especializado',
        },
        {
          title: 'Operadores técnicos certificados',
        },
        {
          title: 'Unidades de producción remota',
        },
        {
          title: 'Enlaces satelitales y fibra',
        },
      ],
      action: {
        href: '#contacto',
        label: 'Cotizar proyecto',
      },
    },
    {
      id: 'corporativo',
      title: 'Sector Privado',
      destacado: 'Experiencia de Marca',
      isDestacado: false,
      features: [
        {
          title: 'Lanzamientos de producto',
        },
        {
          title: 'Convenciones anuales',
        },
        {
          title: 'Streaming privado corporativo',
        },
        {
          title: 'Escenografía y branding digital',
        },
      ],
      action: {
        href: '#contacto',
        label: 'Solicitar cotización',
      },
    },
  ],
}

