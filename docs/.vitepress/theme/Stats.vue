<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const items = computed(() =>
  lang.value.startsWith('zh')
    ? [
        { n: '7', label: '集成于同一工位的设备与机械' },
        { n: '4', label: '自主开发的软件系统' },
        { n: '8', sup: '+', label: '个月的实际部署运行' },
        { n: '100', sup: '+', label: '场实验样本加工与数据记录' },
      ]
    : [
        { n: '7', label: 'Instruments and machines on one workstation' },
        { n: '4', label: 'Custom software systems' },
        { n: '8', sup: '+', label: 'Months in service' },
        { n: '100', sup: '+', label: 'Sample-processing sessions recorded' },
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
