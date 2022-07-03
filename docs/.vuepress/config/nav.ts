// nav 配置, 即上方导航栏

import { NavItem } from 'vuepress/config'

export default <Array<NavItem>>[
  {
    text: '🌏 首页',
    link: '/'
  },
  {
    text: '☕️ 前端笔记',
    link: '/front-end/',
    items: [
      { text: '🗺 前端学习路线', link: '/front-end/roadmap/' },
      {
        text: '分类',
        items: [
          { text: '🚶 前端入门基础', link: '/front-end/beginning/' },
          { text: '🚶🏻 前端巩固基础', link: '/front-end/stable/' },
          { text: '🏃 前端核心框架', link: '/front-end/core-frame/' },
          { text: '🪞 前端面试题收集', link: 'front-end/interview/'}
        ]
      }
    ]
  },
  {
    text: '🚏 索引',
    link: '/archives/',
    items: [
      { text: '🗄归档', link: '/archives/' },
      { text: '🔖标签', link: '/tags/' }
    ]
  },
  {
    text: '🔖 关于',
    link: '/about/',
  }
]
