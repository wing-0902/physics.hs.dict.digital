// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '物理 - dict.digital',
      htmlAttrs: {
        lang: 'ja'
      }
    }
  },
  compatibilityDate: '2025-07-15',
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'night-owl',
          langs: ['js', 'jsx', 'ts', 'tsx', 'svelte']
        },
        remarkPlugins: {
          'remark-math': {}
        },
        rehypePlugins: {
          'rehype-katex': {}
        }
      }
    }
  },
  css: [
    '@unocss/reset/sanitize/sanitize.css',
    '@unocss/reset/sanitize/assets.css',
    '~/assets/global.scss',
    'katex/dist/katex.min.css'
  ],
  devtools: { enabled: true },
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append'
      }
    }
  },
  modules: ['@nuxtjs/sitemap', '@nuxt/content', '@unocss/nuxt'],
  site: {
    url: 'https://physics.hs.dict.digital',
    name: '物理 - dict.digital',
    trailingSlash: true
  },
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit', '@vueuse/core']
    }
  }
});
