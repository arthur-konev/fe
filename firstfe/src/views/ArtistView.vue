<script setup lang="ts">
import JustArtist from '../components/JustArtist.vue'
import {useRoute} from 'vue-router';

const route = useRoute()


</script>

<template>
  <main>
    <JustArtist :id="route.params.id"/>
  </main>
</template>
