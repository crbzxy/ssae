# SAE - Sitio Web Corporativo

Sitio web corporativo de **SAE - Servicios, Audio y Espectáculos, S.A. de C.V.** construido con Next.js 14, Chakra UI y Saas UI.

**[Ver sitio en vivo](https://ssae.netlify.app/)**

## 📋 Tabla de Contenidos

- [Tecnologías](#tecnologías)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Levantar el Proyecto](#levantar-el-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Configuración](#configuración)
- [Mantenimiento](#mantenimiento)
- [Despliegue](#despliegue)
- [Troubleshooting](#troubleshooting)

## 🛠 Tecnologías

- **Next.js 14** (App Router) - Framework React
- **Chakra UI 2.10** - Sistema de componentes
- **Saas UI 2.9** - Componentes SaaS adicionales
- **TypeScript 5.6** - Tipado estático
- **Framer Motion** - Animaciones
- **React Icons** - Iconografía

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** 18.x o superior ([Descargar](https://nodejs.org/))
- **pnpm** 8.15.9 o superior ([Instalar pnpm](https://pnpm.io/installation))

Para verificar tus versiones:

```bash
node --version  # Debe ser v18.x o superior
pnpm --version  # Debe ser 8.15.9 o superior
```

## 🚀 Instalación

### Paso 1: Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd saas-ui-nextjs-landing-page-main
```

### Paso 2: Instalar Dependencias

```bash
pnpm install
```

Este comando instalará todas las dependencias necesarias definidas en `package.json`.

> **Nota:** Este proyecto usa `pnpm` como gestor de paquetes. Si no lo tienes instalado, puedes instalarlo con:
> ```bash
> npm install -g pnpm
> ```

### Paso 3: Verificar la Instalación

```bash
pnpm run build
```

Si el build se completa sin errores, la instalación fue exitosa.

## 🏃 Levantar el Proyecto

### Modo Desarrollo

Para iniciar el servidor de desarrollo:

```bash
pnpm dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

El servidor se recarga automáticamente cuando modificas archivos.

### Modo Producción (Local)

Para probar el build de producción localmente:

```bash
# 1. Construir la aplicación
pnpm build

# 2. Iniciar el servidor de producción
pnpm start
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

### Verificar el Build

```bash
pnpm lint
```

Ejecuta ESLint para verificar errores de código.

## 📁 Estructura del Proyecto

```
├── app/                    # Next.js App Router
│   ├── (auth)/            # Rutas de autenticación (login, signup)
│   ├── (marketing)/       # Páginas de marketing (landing page)
│   ├── layout.tsx         # Layout raíz
│   └── provider.tsx       # Providers de Chakra UI y Saas UI
│
├── components/            # Componentes reutilizables
│   ├── layout/           # Header, Footer, Navigation
│   ├── pricing/         # Componente de servicios/precios
│   ├── features/        # Componente de características
│   ├── testimonials/    # Testimonios de clientes
│   └── ...
│
├── data/                 # Archivos de configuración y datos
│   ├── config.tsx        # Configuración global (SEO, header, footer)
│   ├── servicios.tsx     # Datos de servicios
│   ├── testimonials.tsx  # Testimonios
│   ├── faq.tsx          # Preguntas frecuentes
│   ├── mision.tsx       # Misión y valores
│   └── logo.tsx         # Componente del logo
│
├── theme/                # Configuración del tema
│   ├── foundations/     # Colores, tipografía
│   └── components/      # Estilos de componentes
│
├── public/               # Archivos estáticos
│   └── static/          # Imágenes, favicons, screenshots
│
└── hooks/                # Custom hooks de React
```

## ⚙️ Configuración

### Configuración Global

Edita `/data/config.tsx` para modificar:

- **SEO**: Título, descripción, keywords
- **Header**: Links de navegación
- **Footer**: Copyright, links, redes sociales
- **Contacto**: Teléfono, email, WhatsApp

### Colores de Marca

Edita `/theme/foundations/colors.ts` para cambiar:

- Colores primarios y secundarios
- Modo de color por defecto (claro/oscuro)
- Colores semánticos

### Contenido

- **Servicios**: `/data/servicios.tsx`
- **Testimonios**: `/data/testimonials.tsx`
- **FAQ**: `/data/faq.tsx`
- **Misión**: `/data/mision.tsx`
- **Verticales de Mercado**: `/data/verticales-mercado.tsx`

### Logo

Reemplaza `/public/static/images/logo.png` con tu logo. El componente está en `/data/logo.tsx`.

## 🔧 Mantenimiento

### Actualizar Dependencias

#### Verificar Dependencias Desactualizadas

```bash
pnpm outdated
```

#### Actualizar Dependencias

```bash
# Actualizar todas las dependencias a la última versión compatible
pnpm update

# Actualizar una dependencia específica
pnpm update <nombre-paquete>

# Actualizar a la última versión (puede romper compatibilidad)
pnpm update --latest
```

#### Actualizar Dependencias de Desarrollo

```bash
pnpm update --dev
```

### Actualizar Next.js

```bash
pnpm update next react react-dom
```

### Limpiar Cache y Reinstalar

Si encuentras problemas con dependencias:

```bash
# Eliminar node_modules y lock file
rm -rf node_modules pnpm-lock.yaml

# Reinstalar
pnpm install
```

### Verificar el Proyecto

```bash
# Linter
pnpm lint

# Build de producción
pnpm build

# Type checking (si está configurado)
pnpm type-check
```

### Actualizar el Tema

Los colores y estilos están centralizados en:

- `/theme/foundations/colors.ts` - Colores de marca
- `/theme/foundations/typography.ts` - Tipografía
- `/theme/components/` - Estilos de componentes

Consulta `/theme/foundations/README.md` para más detalles.

## 🚢 Despliegue

### Netlify (Recomendado)

Este proyecto está configurado para Netlify. Ver `NETLIFY_DEPLOY.md` para instrucciones detalladas.

**Configuración rápida:**

1. Conecta tu repositorio a Netlify
2. Configuración de build:
   - **Build command**: `pnpm build`
   - **Publish directory**: `.next`
3. Netlify detectará automáticamente `netlify.toml`

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Otros Proveedores

Para otros proveedores (AWS, Azure, etc.), asegúrate de:

1. Configurar `NODE_VERSION=18` en el entorno
2. Ejecutar `pnpm build` como comando de build
3. Servir desde `.next` o usar `pnpm start`

## 🐛 Troubleshooting

### Error: "Cannot find module"

```bash
# Limpiar e reinstalar
rm -rf node_modules .next
pnpm install
```

### Error: "Port 3000 already in use"

```bash
# Usar otro puerto
pnpm dev -- -p 3001
```

### Error de Build

```bash
# Limpiar cache de Next.js
rm -rf .next
pnpm build
```

### Problemas con pnpm

Si `pnpm` no está disponible:

```bash
# Instalar pnpm globalmente
npm install -g pnpm

# O usar npm directamente (no recomendado)
npm install
npm run dev
```

### Errores de TypeScript

```bash
# Verificar tipos
npx tsc --noEmit
```

### Problemas con Imágenes

Asegúrate de que las imágenes estén en `/public/static/images/` y que las rutas en el código sean correctas (ej: `/static/images/logo.png`).

## 📚 Recursos Adicionales

### Documentación

- [Next.js Documentation](https://nextjs.org/docs)
- [Chakra UI Documentation](https://chakra-ui.com/docs)
- [Saas UI Documentation](https://saas-ui.dev/docs)

### Arquitectura del Proyecto

Consulta `ARQUITECTURA.md` para entender la estructura y arquitectura del proyecto.

### Guía de Despliegue

Consulta `NETLIFY_DEPLOY.md` para instrucciones detalladas de despliegue en Netlify.

## 📝 Scripts Disponibles

```bash
pnpm dev      # Servidor de desarrollo (localhost:3000)
pnpm build    # Construir para producción
pnpm start    # Servidor de producción
pnpm lint     # Ejecutar ESLint
```

## 🔐 Variables de Entorno

Actualmente no se requieren variables de entorno. Si necesitas agregar alguna:

1. Crea un archivo `.env.local`
2. Agrega tus variables (ej: `NEXT_PUBLIC_API_URL=...`)
3. Reinicia el servidor de desarrollo

## 📄 Licencia

MIT

## 👥 Soporte

Para problemas o preguntas sobre el proyecto, contacta al equipo de desarrollo.

---

**SAE - Servicios, Audio y Espectáculos, S.A. de C.V.**  
Trigo 58-A, Granjas Esmeralda, Iztapalapa, CDMX  
Tel: (55) 66 10 34 92
