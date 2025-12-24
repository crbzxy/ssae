# Arquitectura y Estructura del Proyecto Next.js

## Información General

Este es un proyecto de landing page SaaS construido con Next.js 14 usando el App Router. El proyecto está escrito en TypeScript y utiliza un sistema de diseño basado en Chakra UI y Saas UI.

### Versiones Clave

- **Next.js**: 14.2.14 (App Router)
- **React**: 18.3.1
- **TypeScript**: 5.6.2
- **Chakra UI**: 2.10.1
- **Saas UI**: 2.9.0
- **Framer Motion**: 11.11.1
- **Gestor de paquetes**: pnpm 8.15.9

## Arquitectura del Proyecto

### 1. Estructura de Directorios

El proyecto sigue una arquitectura modular por capas:

```
/
├── app/                    # Next.js App Router (routing y páginas)
│   ├── (auth)/            # Route Group: páginas de autenticación
│   │   ├── login/
│   │   └── signup/
│   ├── (marketing)/       # Route Group: landing page principal
│   │   ├── layout.tsx    # Layout específico de marketing
│   │   └── page.tsx      # Página principal (home)
│   ├── layout.tsx         # Layout raíz (Server Component)
│   └── provider.tsx      # Providers globales (Client Component)
│
├── components/            # Componentes reutilizables (arquitectura modular)
│   ├── layout/           # Header, Footer, Navigation, Logo
│   ├── hero/             # Hero section (sección principal)
│   ├── features/         # Grid de características
│   ├── pricing/          # Tabla de precios
│   ├── testimonials/     # Testimonios
│   ├── highlights/       # Secciones destacadas
│   ├── faq/              # Preguntas frecuentes
│   ├── section/          # Componente Section reutilizable
│   ├── motion/           # Wrappers de animación (Framer Motion)
│   ├── gradients/        # Gradientes de fondo
│   └── [otros]/          # Más componentes modulares
│
├── data/                  # Configuración y contenido (separado de lógica)
│   ├── config.tsx        # Configuración global del sitio (Client Component)
│   ├── pricing.tsx       # Datos de precios
│   ├── faq.tsx          # Preguntas frecuentes
│   ├── testimonials.tsx # Testimonios
│   └── logo.tsx         # Componente Logo (Client Component)
│
├── theme/                 # Sistema de diseño
│   ├── index.ts          # Tema principal (extiende Chakra UI + Saas UI)
│   ├── foundations/      # Tipografía, colores base
│   └── components/       # Estilos personalizados de componentes
│
├── hooks/                 # Custom hooks de React
│   ├── use-route-changed.ts
│   └── use-scrollspy.ts
│
└── public/                # Archivos estáticos
    └── static/
        ├── favicons/    # Iconos y favicons
        ├── images/         # Imágenes
        └── screenshots/    # Screenshots de productos
```

### 2. Patrones Arquitectónicos

#### Separación de Concerns

- **Presentación**: `/components` - Componentes UI puros
- **Datos**: `/data` - Contenido y configuración
- **Estilos**: `/theme` - Sistema de diseño
- **Lógica**: `/hooks` - Lógica reutilizable
- **Routing**: `/app` - Páginas y layouts

#### Modularidad

- Cada componente tiene su propia carpeta con `index.ts` para exports limpios
- Componentes son independientes y reutilizables
- Separación clara entre datos y presentación

#### Path Aliases (TypeScript)

```json
{
  "#components/*": ["./components/*"],
  "#hooks/*": ["./hooks/*"],
  "#data/*": ["./data/*"],
  "#theme": ["./theme"]
}
```

Permite imports limpios: `import { Hero } from '#components/hero'`

### 3. Next.js App Router

#### Route Groups

- `(auth)` y `(marketing)` son route groups que organizan rutas sin afectar URLs
- Permiten layouts específicos por grupo
- No aparecen en la URL final

#### Server vs Client Components

- **Server Components** (por defecto): Se renderizan en el servidor
- **Client Components**: Marcados con `'use client'`, se ejecutan en el navegador
- **Regla**: Si usa hooks, eventos, o estado → debe ser Client Component

#### Layouts Anidados

```
app/layout.tsx (raíz)
  └── app/(marketing)/layout.tsx (marketing)
      └── app/(marketing)/page.tsx (home)
```

### 4. Sistema de Diseño

#### Jerarquía de Temas

1. Tema base de Saas UI (`@saas-ui/react`)
2. Tema base de Chakra UI
3. Personalizaciones en `/theme/index.ts`

#### Estructura del Tema

```typescript
export const theme = extendTheme(
  {
    config: { initialColorMode: 'dark' },
    styles: { global: {...} },
    fonts: { heading: 'Inter Variable', body: 'Inter Variable' },
    fontSizes: {...},
    components: {...}
  },
  baseTheme  // Tema base de Saas UI
)
```

#### Componentes de Tema

- `/theme/components/` contiene estilos personalizados
- Cada componente puede tener `baseStyle`, `variants`, `sizes`, `defaultProps`
- Usa `useMultiStyleConfig` para acceder a estilos en componentes

### 5. Flujo de Datos

```
┌──────────────┐
│  /data/      │  →  Contenido estático y configuración
│  config.tsx  │     (Client Components porque contienen funciones/componentes)
│  pricing.tsx │
│  faq.tsx    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ /components/ │  →  Componentes presentacionales
│              │     (Reciben props de /data)
│  Hero        │     (Algunos son Client Components por hooks)
│  Features    │
│  Pricing     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   /app/      │  →  Páginas que componen todo
│   page.tsx   │     (Client Component porque usa hooks de Chakra UI)
└──────────────┘
```

### 6. Componentes Clave

#### Hero Component

- Sección principal de la landing page
- Recibe `title`, `description`, `children`
- Usa animaciones `FallInPlace` de Framer Motion
- Responsive con breakpoints de Chakra UI

#### Features Component

- Grid de características con iconos
- Usa `useMultiStyleConfig` para estilos del tema
- Soporta variantes y posiciones de iconos
- Animaciones opcionales con `reveal` prop

#### Pricing Component

- Tabla de precios con planes
- Soporta planes recomendados
- Features list con iconos
- Botones de acción personalizables

#### Section Component

- Wrapper reutilizable para secciones
- Usa `useMultiStyleConfig` para estilos
- Soporta variantes (subtle, solid, alternate)
- Container interno con ancho configurable

### 7. Animaciones

#### Framer Motion Integration

- Componentes en `/components/motion/`
- `MotionBox`: Wrapper de Chakra UI + Framer Motion
- `FallInPlace`: Animación de entrada
- `PageTransition`: Transición entre páginas
- `Float`: Animación flotante continua

#### Uso

```typescript
<FallInPlace delay={0.4}>
  <Text>Contenido animado</Text>
</FallInPlace>
```

### 8. Configuración

#### next.config.mjs

- React Strict Mode habilitado
- Webpack configurado para SVGs (usando @svgr/webpack)
- SVGs se importan como componentes React
- Optimización de caché

#### tsconfig.json

- Target ES5 para compatibilidad
- Path aliases configurados
- Strict mode habilitado
- JSX preserve para Next.js

### 9. Proveedores Globales

**app/provider.tsx:**

```typescript
<SaasProvider theme={theme}>
  <AuthProvider>
    {children}
  </AuthProvider>
</SaasProvider>
```

- Envuelve toda la aplicación
- Proporciona tema de Chakra UI
- Proporciona contexto de autenticación de Saas UI

### 10. Estilos y Responsive

#### Chakra UI Props

- Estilos inline con props: `bg="blue.500"`, `p={4}`, `color="gray.900"`
- Responsive con arrays: `spacing={[4, null, 8]}` → [mobile, tablet, desktop]
- Dark mode con `_dark` prop: `_dark={{ color: 'white' }}`
- Breakpoints: `base`, `sm`, `md`, `lg`, `xl`, `2xl`

#### Sistema de Colores

- Paleta de Chakra UI: `primary.500`, `gray.900`, etc.
- Modo oscuro nativo
- Transiciones automáticas

### 11. Tipos y Type Safety

#### TypeScript

- Interfaces para props de componentes
- Tipos para configuración en `/data`
- `satisfies` para validación de tipos
- Path aliases con tipos correctos

#### Ejemplo

```typescript
interface HeroProps extends Omit<FlexProps, 'title'> {
  title: string | React.ReactNode
  description?: string | React.ReactNode
}
```

### 12. Optimizaciones

#### Performance

- Next.js Image para imágenes optimizadas
- Code splitting automático
- Tree shaking con ES modules
- Lazy loading de componentes cuando es posible

#### SEO

- Meta tags configurables
- Open Graph tags
- Twitter Cards
- Structured data (preparado)

## Características Especiales

1. **Modularidad Extrema**: Cada componente es independiente y reutilizable
2. **Separación de Datos**: Contenido separado de presentación
3. **Sistema de Temas Flexible**: Fácil personalización sin tocar componentes
4. **Type Safety**: TypeScript en todo el proyecto
5. **Responsive First**: Diseño mobile-first con Chakra UI
6. **Dark Mode**: Soporte nativo con toggle
7. **Animaciones Suaves**: Framer Motion integrado
8. **Accesibilidad**: Componentes siguen WAI-ARIA standards

## Flujo de Rendering

1. **Server**: Next.js renderiza layouts y Server Components
2. **Hydration**: Client Components se hidratan en el navegador
3. **Interactividad**: Hooks y eventos funcionan en Client Components
4. **Tema**: Chakra UI aplica estilos según modo (light/dark)

## Dependencias Principales

- **@chakra-ui/react**: Sistema de componentes
- **@saas-ui/react**: Componentes SaaS adicionales
- **@saas-ui/auth**: Sistema de autenticación
- **framer-motion**: Animaciones
- **react-icons**: Iconos
- **@fontsource-variable/inter**: Fuente Inter Variable
- **@svgr/webpack**: SVGs como componentes

## Configuración Actual

El proyecto está parcialmente adaptado para "SAE - Servicios, Audio y Espectáculos":

- SEO configurado para servicios audiovisuales
- Links de navegación adaptados
- Configuración básica en `data/config.tsx`
- Necesita adaptación completa de contenido y componentes

## Guía de Personalización

### Nivel 1: Contenido (Fácil - 1-2 horas)

1. Editar `/data/config.tsx`:
   - Cambiar título, descripción
   - Actualizar links del header/footer
   - Cambiar logo

2. Editar contenido:
   - `/data/pricing.tsx`
   - `/data/faq.tsx`
   - `/data/testimonials.tsx`

3. Reemplazar imágenes:
   - `/public/static/images/`
   - `/public/static/screenshots/`

### Nivel 2: Estilos y Tema (Medio - 2-4 horas)

1. Colores (`/theme/index.ts`):
```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#3b82f6',  // Tu color principal
    900: '#1e3a8a'
  }
}
```

2. Fuentes:
```typescript
// Instalar nueva fuente
pnpm add @fontsource-variable/tu-fuente

// En theme/index.ts
fonts: {
  heading: 'Tu Fuente Variable',
  body: 'Tu Fuente Variable'
}
```

3. Logo (`/data/logo.tsx`):
   - Reemplazar el SVG o usar imagen

### Nivel 3: Componentes (Avanzado - 4-8 horas)

1. Modificar componentes existentes:
   - `/components/hero/hero.tsx`
   - `/components/features/features.tsx`
   - `/components/section/section.tsx`

2. Crear nuevos componentes:
   - Crear carpeta en `/components`
   - Crear componente con `index.ts`
   - Agregar estilos en `/theme/components` si aplica
   - Usar en páginas

### Nivel 4: Estructura (Muy Avanzado - 8-16 horas)

1. Agregar nuevas páginas:
```typescript
// app/(marketing)/nueva-pagina/page.tsx
'use client'
export default function NuevaPagina() {
  return <Section>...</Section>
}
```

2. Integrar autenticación real:
   - Configurar proveedores (Clerk, Supabase, etc.)
   - Modificar `app/provider.tsx`
   - Agregar lógica de autenticación

## Consideraciones Importantes

### Path Aliases

Usa los path aliases configurados para imports consistentes:
- `#components/*` → `./components/*`
- `#data/*` → `./data/*`
- `#theme` → `./theme`

### Client vs Server Components

- **Server Components**: Por defecto en `/app`
- **Client Components**: Necesitan `'use client'` cuando usan:
  - Hooks de React
  - Event handlers
  - Estado
  - Hooks de Chakra UI

### Sistema de Temas

- Extiende Chakra UI y Saas UI
- Usa `extendTheme()` para personalizar
- Los componentes del tema sobrescriben estilos base

### Responsive Design

Chakra UI usa arrays para responsive:
```typescript
spacing={[4, null, 8]}  // [mobile, tablet, desktop]
```

## Checklist de Personalización

### Básico
- [ ] Cambiar título y descripción en `config.tsx`
- [ ] Actualizar logo
- [ ] Modificar links de navegación
- [ ] Actualizar contenido de pricing/FAQ/testimonials

### Intermedio
- [ ] Cambiar colores del tema
- [ ] Cambiar fuentes
- [ ] Personalizar estilos de componentes
- [ ] Reemplazar imágenes

### Avanzado
- [ ] Modificar estructura de componentes
- [ ] Agregar nuevas secciones
- [ ] Crear componentes personalizados
- [ ] Integrar autenticación real

## Tiempos Estimados

| Nivel | Complejidad | Tiempo |
|-------|------------|--------|
| Contenido | Baja | 1-2 horas |
| Estilos | Media | 2-4 horas |
| Componentes | Alta | 4-8 horas |
| Estructura | Muy Alta | 8-16 horas |

## Recomendaciones

1. **Empieza por `/data`**: Contenido primero
2. **Luego `/theme`**: Personaliza estilos
3. **Después `/components`**: Ajusta componentes
4. **Por último estructura**: Agrega funcionalidad

---

**Última actualización**: 2024
**Versión del proyecto**: 0.1.0

