import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN', // 'en-US
  title: "pan",
  description: "pan's blog",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ['link', {rel: "icon", type: "image/png", href: "/favicon.png"}],
    ['meta', {property: 'og:type', content: 'website'}],
    ['meta', {property: 'og:title', content: "pan's blog"}],
    ['script', {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-2QFP04Q1TY'}],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2QFP04Q1TY');`],
  ],
  markdown: {
    headers: {
      level: [0, 1]
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Examples', link: '/markdown-examples'}
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Examples',
        items: [
          {text: 'Markdown Examples', link: '/markdown-examples'},
          {text: 'Runtime API Examples', link: '/api-examples'}
        ]
      }
    ],
    socialLinks: [
      {icon: 'github', link: 'https://github.com/hviwen'}
    ],
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Pan',
    },
  }
})
