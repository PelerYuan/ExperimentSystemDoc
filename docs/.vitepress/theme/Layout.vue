<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Diagram from './Diagram.vue'
import Stats from './Stats.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <Diagram name="rig" class="hero-diagram" />
    </template>
    <template #home-features-before>
      <Stats />
    </template>
  </Layout>
</template>
