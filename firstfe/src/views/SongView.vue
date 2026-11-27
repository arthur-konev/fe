<script setup lang="ts">
import JustSong from '../components/JustSong.vue'
import {useRoute} from 'vue-router';

const route = useRoute()
</script>

<template>
  <main>
    <JustSong v-if="typeof route.params.id === 'string'" :id="route.params.id"/>
  </main>
</template>
