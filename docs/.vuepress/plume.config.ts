import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://q1.qlogo.cn/g?b=qq&nk=2099311682&s=100',
  // your git repo url
  docsRepo: 'https://github.com/for9464/for9464.github.io',
  docsBranch: 'main',
  docsDir: 'docs',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://github.com/only9464' },
  ],

  locales: {
    '/': {
      profile: {
        /**
         * 头像链接地址
         */
        avatar: 'https://q1.qlogo.cn/g?b=qq&nk=2099311682&s=100',
        /**
         * 名称
         */
        name: 'only9464',
        /**
         * 描述
         */
        description: '',
        /**
         * 是否显示为圆形头像
         */
        circle: true,
        /**
         * 地理位置
         */
        location: '',
        /**
         * 组织，公司
         */
        organization: '',
        /**
         * 布局位置，左侧或者右侧
         */
        layout: 'left' ,
      },

      navbar: zhNavbar,
      notes: zhNotes,
      footer: false,
      logoDark: 'https://q1.qlogo.cn/g?b=qq&nk=2099311682&s=100',
      appearance: true,
      appearanceText: '外观',
      lightModeSwitchTitle: '光明~即将到来~',
      darkModeSwitchTitle: '迎接黑暗吧~',
    },
    '/en/': {
      profile: {
        avatar: 'https://q1.qlogo.cn/g?b=qq&nk=2099311682&s=100',
        name: 'only9464',
        description: '',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,
      footer: false,
      logoDark: 'https://q1.qlogo.cn/g?b=qq&nk=2099311682&s=100',
    },
  },
})
