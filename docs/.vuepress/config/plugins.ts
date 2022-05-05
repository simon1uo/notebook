// 插件配置, 详见 https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html

import { UserPlugins } from 'vuepress/config'
// @ts-ignore
import fs from 'fs'
// @ts-ignore
import dayjs from 'dayjs'
import { resolve } from 'path'
import type { SmPlayerPluginOption } from 'vuepress-plugin-smplayer/types'

// 配置插件，推荐使用 Babel 式, 根据自己插件情况修改插件配置
export default <UserPlugins>[
    // [
    //     'sitemap',
    //     {
    //         hostname: `https://${fs.readFileSync(
    //             resolve(__dirname, '../public', 'CNAME')
    //         )}`
    //     }
    // ],
    ['pangu'],
    [
        'one-click-copy',
        {
            copySelector: [
                'div[class*="language-"] pre',
                'div[class*="aside-code"] aside'
            ],
            copyMessage: '复制成功',
            duration: 1000,
            showInMobile: false
        }
    ],
    [
        'zooming',
        {
            selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
            options: {
                bgColor: 'rgba(0,0,0,0.6)'
            }
        }
    ],
    ['fulltext-search'],
    [
        'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
        {
            settings: {
                // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                // cssLib: ['http://xxx'], // 在线示例中的css依赖
                vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                jsfiddle: true, // 是否显示 jsfiddle 链接
                codepen: true, // 是否显示 codepen 链接
                horizontal: false // 是否展示为横向样式
            }
        }
    ],
    [
        '@vuepress/last-updated', // "上次更新"时间格式
        {
            transformer: (timestamp, lang) => {
                return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
            }
        }
    ],
    [
        // vue-tabs-component
        'tabs',
        {}
    ],
    ['@vuepress/nprogress']
]
