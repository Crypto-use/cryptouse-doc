const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  images: {
    domains: ['uploaddeimagens.com.br', 'cdn.discordapp.com'],
  },
})