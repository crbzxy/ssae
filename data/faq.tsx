import * as React from 'react'

const faq = {
  title: 'Preguntas Frecuentes',
  description: 'Resolvemos dudas de productores y compradores',
  items: [
    {
      q: '¿Tienen cobertura fuera de la CDMX?',
      a: (
        <>
          Sí, contamos con logística propia para cubrir eventos en toda la República Mexicana, asegurando la misma calidad técnica que en la capital.
        </>
      ),
    },
    {
      q: '¿Manejan sistemas de traducción simultánea para eventos diplomáticos?',
      a: 'Absolutamente. Contamos con cabinas, receptores y consolas de interpretación que cumplen con estándares internacionales para cumbres y visitas de estado.',
    },
    {
      q: '¿Pueden facturar a entidades gubernamentales?',
      a: 'Sí, SAE está constituida legalmente con toda la documentación en regla (RFC, Opinión de cumplimiento) para licitar y facturar a dependencias públicas y privadas.',
    },
    {
      q: '¿Ofrecen servicio de "Solo Renta" sin operación?',
      a: 'Nuestro enfoque principal es la solución integral (equipo + operación) para garantizar el éxito del evento, pero podemos evaluar esquemas de renta seca (dry hire) para productoras aliadas.',
    },
  ],
}

export default faq
