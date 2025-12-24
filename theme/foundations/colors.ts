/**
 * Colores de marca SAC - Identidad Corporativa
 * * Análisis del Logotipo:
 * - Primary (SAC Red): Extraído de las ondas inferiores. Evoca acción, alerta, precisión y dinamismo.
 * - Secondary (Industrial Silver): Extraído de la tipografía "SAC". Evoca metal, solidez y tecnología corporativa.
 */

export const brandColors = {
    // Color primario: "SAC Red"
    // Un rojo potente ideal para destacar en interfaces oscuras (Dark Mode) y para acciones críticas.
    primary: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444', // Rojo base vibrante (para Dark Mode)
        600: '#dc2626', // Rojo institucional (el tono más cercano a las ondas del logo)
        700: '#b91c1c', // Hover states
        800: '#991b1b', // Bordes oscuros
        900: '#7f1d1d', // Fondos profundos
    },

    // Color secundario: "Industrial Silver / Slate"
    // Reemplaza al Cyan. Usado para elementos estructurales, la tipografía de marca y fondos secundarios.
    secondary: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1', // Tono plateado claro
        400: '#94a3b8', // Tono metálico medio (cercano al centro de las letras)
        500: '#64748b', // Gris sólido
        600: '#475569',
        700: '#334155',
        800: '#1e293b', // Slate oscuro para tarjetas
        900: '#0f172a', // Casi negro para fondos
    },
}

/**
 * Configuración de modo de color
 * Se mantiene 'Dark Mode' por defecto ya que el Rojo y el Gris Plata 
 * resaltan mucho mejor sobre fondo oscuro, dando un look "High-End Engineering".
 */
export const colorModeConfig = {
    initialColorMode: 'dark' as 'light' | 'dark',
    useSystemColorMode: false,
}

/**
 * Colores semánticos adaptados a la nueva identidad SAC
 */
export const semanticColors = {
    // Colores de texto
    text: {
        primary: {
            light: 'gray.900',
            dark: 'gray.100', // Blanco casi puro para máximo contraste con el rojo
        },
        secondary: {
            light: 'gray.600',
            dark: 'gray.400', // Gris plata para jerarquía visual secundaria
        },
        muted: {
            light: 'gray.500',
            dark: 'gray.500',
        },
        // Nuevo: Color de acento para textos que necesitan destacar
        accent: {
            light: 'red.600',
            dark: 'red.400',
        }
    },

    // Colores de fondo
    background: {
        primary: {
            light: 'white',
            dark: '#0f172a', // Slate 900 - Fondo profundo que hace que el rojo vibre
        },
        secondary: {
            light: 'gray.50',
            dark: '#1e293b', // Slate 800 - Ligeramente más claro
        },
        card: {
            light: 'white',
            dark: '#1e293b', // Slate 800 - Mismo tono que las letras oscuras del logo
        },
    },

    // Colores de borde
    border: {
        default: {
            light: 'gray.200',
            dark: 'gray.700',
        },
        muted: {
            light: 'gray.300',
            dark: 'gray.600',
        },
        // Borde activo o seleccionado usando el rojo de la marca
        active: {
            light: 'red.500',
            dark: 'red.600',
        }
    },
}