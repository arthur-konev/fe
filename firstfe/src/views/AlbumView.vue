<script setup lang="ts">
import JustAlbum from '../components/JustAlbum.vue'
import {useRoute} from 'vue-router';

const route = useRoute()


</script>

<template>
  <main>
    <JustAlbum :id="route.params.id"/>
  </main>
</template>
