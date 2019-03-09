const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
      { hid: 'description', name: 'description', itemprop: 'description', content: pkg.description },
      { name: 'keywords', content: '史莱姆的博客,html5,css3,es6,微信小程序,网站开发,技术交流,源码分享,php,nodejs' },
      { name: 'referrer', content: 'origin' },
      { name: 'renderer', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { itemprop: 'author', content: '史莱姆[qq: 478889187]' },
      { itemprop: 'image', content: '//slmblog.com/QQLOGO.jpg' },
      { itemprop: 'name', content: '史莱姆的博客' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'all' },
      { name: 'Copyright', content: 'slmblog.com' },
      { name: 'theme-color', content: '#fff' },
      { name: 'baidu-site-verification', content: 'Zl2SY1gIKO' },
      { name: 'google-site-verification', content: 'ego0URbKF1gcgY61F36Z1jMzo-zRQbCSnlm2qKbOyCY' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//slmblog.com/css/main.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~/plugins/vue-lazyload.js', ssr: false },
    // { src: '~/plugins/connecter.js', ssr: false },
    { src: '~/plugins/axios' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: '//127.0.0.1:8080',
    timeout: 15000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    // }
  }
}
