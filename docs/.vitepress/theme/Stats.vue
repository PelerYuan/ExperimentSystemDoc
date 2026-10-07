<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const items = computed(() =>
  lang.value.startsWith('zh')
    ? [
        { n: '7', label: '个部件组成完整的实验系统' },
        { n: '4', label: '套自主开发的软件系统' },
        { n: '8', sup: '+', label: '个月的实际部署运行' },
        { n: '100', sup: '+', label: '场实验的样本加工与数据记录' },
      ]
    : [
        { n: '7', label: 'Components in the complete system' },
        { n: '4', label: 'Custom software systems built' },
        { n: '8', sup: '+', label: 'Months in service' },
        { n: '100', sup: '+', label: 'Experiment sessions processed and recorded' },
      ],
)
</script>

<template>
  <div class="home-stats">
    <div class="home-stats__inner">
      <div v-for="i in items" :key="i.label" class="home-stats__item">
        <div class="home-stats__num">{{ i.n }}<sup v-if="i.sup">{{ i.sup }}</sup></div>
        <div class="home-stats__label">{{ i.label }}</div>
      </div>
    </div>
  </div>
</template>
