<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useData } from 'vitepress'

defineOptions({ inheritAttrs: false })
const props = defineProps<{ name: string; caption?: string; wide?: boolean; static?: boolean }>()
const { lang } = useData()
const open = ref(false)

// Diagrams are inlined (not <img>) so they inherit the site's theme variables,
// which is what lets them follow dark/light mode.
const files = import.meta.glob('./diagrams/*.svg', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

const zh = computed(() => lang.value.startsWith('zh'))
const svg = computed(() => {
  const suffix = zh.value ? 'zh' : 'en'
  return files[`./diagrams/${props.name}.${suffix}.svg`] ?? files[`./diagrams/${props.name}.en.svg`] ?? ''
})

const onKey = (e: KeyboardEvent) => e.key === 'Escape' && (open.value = false)
watch(open, (v) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = v ? 'hidden' : ''
  v ? window.addEventListener('keydown', onKey) : window.removeEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <figure v-bind="$attrs" class="diagram" :class="{ 'diagram--wide': wide, 'diagram--zoomable': !static }">
    <div
      class="diagram__scroll"
      :role="static ? undefined : 'button'"
      :tabindex="static ? undefined : 0"
      :aria-label="static ? undefined : zh ? '点击放大图表' : 'Click to enlarge diagram'"
      @click="!static && (open = true)"
      @keydown.enter="!static && (open = true)"
    >
      <div class="diagram__canvas" v-html="svg" />
    </div>
    <figcaption v-if="caption">{{ caption }}<span v-if="!static" class="diagram__hint">{{ zh ? '（点击放大）' : ' (click to enlarge)' }}</span></figcaption>
  </figure>

  <Teleport to="body">
    <div v-if="open" class="diagram-lightbox" @click="open = false">
      <button class="diagram-lightbox__close" :aria-label="zh ? '关闭' : 'Close'" @click.stop="open = false">×</button>
      <div class="diagram-lightbox__body" @click.stop>
        <div class="diagram-lightbox__canvas" v-html="svg" />
        <p v-if="caption" class="diagram-lightbox__caption">{{ caption }}</p>
      </div>
    </div>
  </Teleport>
</template>
