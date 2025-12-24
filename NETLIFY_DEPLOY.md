# Guía de Despliegue en Netlify

Esta guía te ayudará a desplegar este proyecto Next.js en Netlify.

## 📋 Requisitos Previos

1. Cuenta en [Netlify](https://www.netlify.com/) (gratis)
2. Repositorio en GitHub, GitLab o Bitbucket
3. Proyecto configurado con `netlify.toml` (ya incluido)

## 🚀 Opción 1: Deploy Automático desde Git (Recomendado)

### Paso 1: Subir tu código a Git

```bash
# Si aún no tienes un repositorio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <tu-repositorio-url>
git push -u origin main
```

### Paso 2: Conectar con Netlify

1. Ve a [app.netlify.com](https://app.netlify.com/)
2. Click en **"Add new site"** → **"Import an existing project"**
3. Conecta tu repositorio (GitHub/GitLab/Bitbucket)
4. Selecciona el repositorio del proyecto

### Paso 3: Configuración de Build

Netlify detectará automáticamente la configuración desde `netlify.toml`, pero verifica:

- **Build command**: `pnpm install && pnpm build`
- **Publish directory**: `.next`
- **Package manager**: `pnpm`

### Paso 4: Variables de Entorno (si las necesitas)

Si en el futuro necesitas variables de entorno (por ejemplo, para autenticación):

1. Ve a **Site settings** → **Environment variables**
2. Agrega las variables necesarias:
   - `NEXT_PUBLIC_*` para variables públicas
   - Variables privadas para APIs

### Paso 5: Deploy

Netlify desplegará automáticamente:
- ✅ Cada push a `main` → Deploy de producción
- ✅ Pull requests → Deploy previews
- ✅ Builds automáticos en cada commit

## 🚀 Opción 2: Deploy Manual con Netlify CLI

### Instalación de Netlify CLI

```bash
npm install -g netlify-cli
```

### Login en Netlify

```bash
netlify login
```

### Deploy

```bash
# Build local
pnpm build

# Deploy a producción
netlify deploy --prod

# O deploy a draft (para probar)
netlify deploy
```

## 🔧 Configuración Avanzada

### Usar Node.js 18 específicamente

El archivo `netlify.toml` ya está configurado, pero puedes ajustar la versión:

```toml
[build.environment]
  NODE_VERSION = "18"  # Cambia según necesites
```

### Build Settings Personalizados

Si necesitas ajustar el build, edita `netlify.toml`:

```toml
[build]
  command = "pnpm install && pnpm build"
  publish = ".next"
```

### Funciones Serverless (si las necesitas)

Next.js API routes se convierten automáticamente en funciones serverless en Netlify.

## 📝 Notas Importantes

### Sobre Next.js en Netlify

- ✅ Next.js 14 con App Router está completamente soportado
- ✅ SSR (Server-Side Rendering) funciona perfectamente
- ✅ API Routes se convierten en funciones serverless
- ✅ Static Site Generation (SSG) también funciona

### Sobre pnpm

- Netlify detecta automáticamente `pnpm` si existe `pnpm-lock.yaml`
- El plugin `@netlify/plugin-nextjs` maneja todo automáticamente

### Optimizaciones Incluidas

- ✅ Headers de seguridad configurados
- ✅ Cache para archivos estáticos
- ✅ Redirecciones automáticas de Next.js
- ✅ Compresión automática

## 🐛 Solución de Problemas

### Error: "pnpm not found"

Asegúrate de que `pnpm-lock.yaml` esté en el repositorio y que Netlify detecte pnpm automáticamente.

### Error: "Build failed"

1. Revisa los logs de build en Netlify
2. Verifica que todas las dependencias estén en `package.json`
3. Asegúrate de que `NODE_VERSION` sea compatible

### Error: "Module not found"

Verifica que todos los archivos necesarios estén en el repositorio y no estén en `.gitignore`.

## 🔗 Enlaces Útiles

- [Documentación de Netlify para Next.js](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Netlify Plugin para Next.js](https://github.com/netlify/netlify-plugin-nextjs)
- [Documentación de Next.js](https://nextjs.org/docs)

## ✅ Checklist de Deploy

- [ ] Código subido a Git
- [ ] Repositorio conectado a Netlify
- [ ] `netlify.toml` configurado correctamente
- [ ] Variables de entorno configuradas (si aplica)
- [ ] Build exitoso
- [ ] Sitio funcionando correctamente
- [ ] Dominio personalizado configurado (opcional)

---

¡Listo! Tu proyecto debería estar funcionando en Netlify. 🎉

