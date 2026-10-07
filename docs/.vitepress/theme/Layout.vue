<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Diagram from './Diagram.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <Diagram name="rig" class="hero-diagram" static />
    </template>
  </Layout>
</template>
