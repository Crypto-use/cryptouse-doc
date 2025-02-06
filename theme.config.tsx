import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: <Image src="/cryptologo.png" width={140} height={140} alt="Crypto use logo" />,
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Crypto Use API',
  },
  nextThemes: {
    defaultTheme: "light",
    forcedTheme: undefined,
  },
}

export default config
