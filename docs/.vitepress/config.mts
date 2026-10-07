import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const sidebar = (p: string, t: Record<string, string>) => [
  {
    text: t.group,
    items: [
      { text: t.overview, link: `${p}/experiment-system` },
      { text: t.ipc, link: `${p}/industrial-computer` },
      { text: t.slideway, link: `${p}/slideway` },
      { text: t.thermal, link: `${p}/thermal-imaging` },
      { text: t.dial, link: `${p}/dial-indicator` },
    ],
  },
]

export default withMermaid(
  defineConfig({
    title: 'Experiment System',
    base: '/ExperimentSystemDoc/',
    cleanUrls: true,
    lastUpdated: true,
    head: [['meta', { name: 'theme-color', content: '#3b82f6' }]],

    locales: {
      root: {
        label: 'English',
        lang: 'en-US',
        description:
          'An integrated wood-processing and data-acquisition platform for physics research: drilling rig, 2D slideway, force/torque, thermal imaging and displacement sensing.',
        themeConfig: {
          nav: [
            { text: 'Overview', link: '/experiment-system' },
            { text: 'Subsystems', link: '/industrial-computer' },
          ],
          sidebar: sidebar('', {
            group: 'Experiment System',
            overview: 'System Overview',
            ipc: 'Industrial Control Computer',
            slideway: '2D Slideway Control',
            thermal: 'Thermal Image Analysis',
            dial: 'Dial Indicator Acquisition',
          }),
        },
      },
      zh: {
        label: '中文',
        lang: 'zh-CN',
        link: '/zh/',
        description: '面向物理实验的木材加工与数据采集一体化平台：钻机、二维滑轨、压力/扭矩、红外热成像与位移测量。',
        themeConfig: {
          nav: [
            { text: '系统总览', link: '/zh/experiment-system' },
            { text: '子系统', link: '/zh/industrial-computer' },
          ],
          sidebar: sidebar('/zh', {
            group: '实验系统',
            overview: '系统总览',
            ipc: '工控计算机系统',
            slideway: '二维滑轨控制系统',
            thermal: '红外热图分析系统',
            dial: '千分表采集系统',
          }),
          outline: { label: '本页目录' },
          docFooter: { prev: '上一篇', next: '下一篇' },
          darkModeSwitchLabel: '外观',
          sidebarMenuLabel: '菜单',
          returnToTopLabel: '回到顶部',
          langMenuLabel: '切换语言',
          lastUpdated: { text: '最后更新' },
        },
      },
    },

    themeConfig: {
      search: {
        provider: 'local',
        options: {
          locales: {
            zh: {
              translations: {
                button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
                modal: {
                  noResultsText: '没有找到结果',
                  resetButtonTitle: '清除',
                  footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
                },
              },
            },
          },
        },
      },
      socialLinks: [{ icon: 'github', link: 'https://github.com/PelerYuan/ExperimentSystemDoc' }],
    },

    mermaid: {},

    vite: {
      optimizeDeps: { include: ['mermaid', 'dayjs', 'debug', 'mermaid > fastdom'] },
    },
  }),
)
