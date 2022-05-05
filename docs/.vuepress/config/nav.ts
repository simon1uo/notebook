// nav 配置, 即上方导航栏

import { NavItem } from 'vuepress/config'

export default <Array<NavItem>>[
    {
        text: '🌏 首页',
        link: '/'
    },
    {
        text: '☕️ 前端笔记',
        link: '/front-end/'
    },
    {
        text: '🔨 技术笔记',
        link: '/tech/'
    },
    {
        text: '📦 创造',
        items: [{ text: '项目', link: '/project/' }]
    },
    {
        text: '🚏索引',
        link: '/archives/',
        items: [
            { text: '🗄归档', link: '/archives/' },
            { text: '🔖标签', link: '/tags/' }
        ]
    },
    {
        text: '🔖 关于',
        link: '/about/',
        items: [
            { text: '🔭 关于本笔记', link: '/about/vutebook/' },
            { text: '😇 关于我', link: '/about/me/' }
        ]
    }
]
