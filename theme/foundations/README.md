# Foundations - Configuración de Tema SAE

Este directorio contiene las configuraciones fundamentales del tema de SAE, incluyendo colores de marca, tipografía y configuraciones de modo de color.

## 📁 Estructura

- `colors.ts` - Colores de marca y configuración de modo de color
- `typography.ts` - Configuración de tipografía
- `index.ts` - Exportaciones centralizadas

## 🎨 Colores de Marca

### Modificar Colores Primarios

Para cambiar los colores de marca de SAE, edita el archivo `theme/foundations/colors.ts`:

```typescript
export const brandColors = {
  primary: {
    50: '#f3e8ff',  // Tono más claro
    100: '#e9d5ff',
    // ...
    500: '#9333ea', // Color principal (usado en botones, links, etc.)
    // ...
    900: '#4c1d95', // Tono más oscuro
  },
}
```

### Esquemas de Color Predefinidos

El archivo incluye comentarios con esquemas alternativos que puedes usar:

1. **Esquema Púrpura (Actual)** - Color corporativo profesional
2. **Esquema Azul Corporativo** - Alternativa más conservadora
3. **Esquema Rojo/Verde** - Para industria audiovisual

Para cambiar de esquema, simplemente comenta el esquema actual y descomenta el que prefieras.

## 🌓 Modo de Color

### Cambiar Modo por Defecto

En `theme/foundations/colors.ts`:

```typescript
export const colorModeConfig = {
  initialColorMode: 'dark', // Cambiar a 'light' para modo claro por defecto
  useSystemColorMode: false, // Cambiar a true para seguir preferencia del sistema
}
```

### Colores Semánticos

Los colores semánticos se adaptan automáticamente al modo claro/oscuro:

- `semanticColors.text.primary` - Texto principal
- `semanticColors.text.secondary` - Texto secundario
- `semanticColors.background.primary` - Fondo principal
- `semanticColors.background.card` - Fondo de tarjetas

## 📝 Uso en Componentes

### Usar Colores de Marca

```typescript
import { useColorModeValue } from '@chakra-ui/react'

// Color primario de marca
<Box color="primary.500" />

// Con adaptación a modo claro/oscuro
const textColor = useColorModeValue('gray.800', 'white')
<Text color={textColor}>Texto adaptativo</Text>
```

### Usar Colores Semánticos

Los colores semánticos están disponibles a través del tema de Chakra UI:

```typescript
// Estos colores se adaptan automáticamente
<Box bg="gray.50" _dark={{ bg: 'gray.800' }} />
```

## 🔄 Cambiar Todo el Esquema de Color

Para cambiar completamente el esquema de colores:

1. Abre `theme/foundations/colors.ts`
2. Modifica `brandColors.primary` con tus nuevos colores
3. Ajusta `colorModeConfig` si es necesario
4. Los cambios se aplicarán globalmente en todo el sitio

## 📚 Referencias

- [Chakra UI Colors](https://chakra-ui.com/docs/styled-system/theme#colors)
- [Color Mode](https://chakra-ui.com/docs/styled-system/color-mode)

