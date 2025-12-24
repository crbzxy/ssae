/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // Configuración para SVGs
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })

    // Optimización: Suprimir advertencias de serialización de caché
    // (Estas advertencias son informativas y no afectan la funcionalidad)
    if (config.cache && typeof config.cache === 'object') {
      config.cache.maxMemoryGenerations = 1
    }

    return config
  },
}

export default nextConfig
