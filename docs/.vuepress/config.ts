// 示例全部使用 .ts 配置, 详见说明 https://v1.vuepress.vuejs.org/zh/guide/typescript-as-config.html

import { defineConfig4CustomTheme } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import themeConfig from './config/themeVdoingConfig'
import markdown from './config/markdown'
import plugins from './config/plugins'
import head from './config/head'
import { resolve } from 'path'

export default defineConfig4CustomTheme<VdoingThemeConfig>({
    // theme: 'vdoing',
    theme: resolve(__dirname, '../../vdoing'),
    title: 'notebook',
    description: 'a frontend notebook by Simon',
    dest: 'dist',
    base: '/notebook/', // base url
    shouldPrefetch: () => false,
    head: head,
    themeConfig,
    markdown,
    plugins,

    // 监听文件变化并重新构建
    extraWatchFiles: ['.vuepress/config.ts']
})
