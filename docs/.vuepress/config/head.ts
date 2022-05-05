import { HeadTags } from 'vuepress/config'

export default <HeadTags>[
    ['link', { rel: 'icon', href: '/favicon.ico' }], //站点图标, 默认为 public/favicon.ico
    [
        'meta',
        {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }
    ],
    [
        'meta',
        {
            name: 'keywords',
            content:
                '个人学习笔记,前端学习笔记,前端学习,前端学习资源,前端学习路线,HTML,CSS,JavaScript,Vue,React'
        }
    ],
    ['meta', { name: 'theme-color', content: '#204A7A' }],
    [
        'link',
        {
            rel: 'stylesheet',
            href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css'
        }
    ]
]
