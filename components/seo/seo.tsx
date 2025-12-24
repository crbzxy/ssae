import React from 'react'

// Este componente ya no se usa. La metadata se maneja en app/(marketing)/layout.tsx
// Se mantiene para compatibilidad con código existente que pueda importarlo
export interface SEOProps {
  title?: string
  description?: string
  [key: string]: any
}

export const SEO = (_props: SEOProps) => {
  // No-op: La metadata se maneja en el layout
  return null
}
