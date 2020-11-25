const autoprefixer = require('autoprefixer')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const webpack = require('webpack')

export default {
    ssr: false,
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        title: 'Sete Três',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, height=device-height, user-scalable=no, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Hello, my name is Guilherme Pangnotta. Born and raised in São Paulo now living in Belo Horizonte, Brazil. Currently working as a Product Designer at Hotmart, Tattoo Artist at InkStarter and also a member of the Awwwards Jury.' },

            { hid: 'fb:app_id', property: 'fb:app_id', content: '1129806853741128' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:title', property: 'og:title', content: 'Sete Três' },
            { hid: 'og:description', property: 'og:description', content: 'Hello, my name is Guilherme Pangnotta. Born and raised in São Paulo now living in Belo Horizonte, Brazil. Currently working as a Product Designer at Hotmart, Tattoo Artist at InkStarter and also a member of the Awwwards Jury.' },
            { hid: 'og:image', property: 'og:image', content: 'https://v11.setetres.st/images/share.png' },
            { hid: 'og:url', property: 'og:url', content: 'https://v11.setetres.st' },

            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'Sete Três' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'Hello, my name is Guilherme Pangnotta. Born and raised in São Paulo now living in Belo Horizonte, Brazil. Currently working as a Product Designer at Hotmart, Tattoo Artist at InkStarter and also a member of the Awwwards Jury.' },
            { hid: 'twitter:image', name: 'twitter:image', content: 'https://v11.setetres.st/images/share.png' }
        ],
        link: [
            { rel: 'canonical', href: 'https://v11.setetres.st' },
            { rel: 'icon', href: '/favicon.png' }
        ]
    },
    css: [
        '@/node_modules/normalize.css/normalize.css',
        '@/assets/application.scss',
        '@/assets/about.scss',
        '@/assets/dark-mode.scss',
        '@/assets/embed.scss',
        '@/assets/error.scss',
        '@/assets/inkstarter.scss',
        '@/assets/link.scss',
        '@/assets/mncrft.scss',
        '@/assets/music.scss',
        '@/assets/setetres.scss',
        '@/assets/stories.scss',
        '@/assets/veeews.scss',
        '@/assets/xxxxxxxooo.scss'
    ],
    loading: {
        color: '#000000',
        height: '100%',
        failedColor: '#e02020',
        throttle: 0
    },
    plugins: [
        {
            src: '~/plugins/ga.js',
            mode: 'client'
        }
    ],
    modules: [
        '@nuxtjs/axios'
    ],
    build: {
        postcss: {
            autoprefixer
        },
        plugins: [
            new StyleLintPlugin({
                files: [
                    '/assets/**/*.scss'
                ],
                configFile: 'stylelintrc.json'
            })
        ],
        extend(config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
