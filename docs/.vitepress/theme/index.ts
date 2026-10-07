import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import Diagram from './Diagram.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Diagram', Diagram)
  },
  setup() {
    const route = useRoute()
    // Click any content image to open it full size.
    const init = () =>
      mediumZoom('.vp-doc img:not(.no-zoom)', {
        background: 'var(--vp-c-bg)',
        margin: 24,
      })
    onMounted(init)
    watch(
      () => route.path,
      () => nextTick(init),
    )
  },
} satisfies Theme
