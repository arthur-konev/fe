<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { get_album } from '@/tools/tools'
import JustList from './JustList.vue'

const props = defineProps<{ id: string | number }>()
const album = computed(() => get_album(props.id))
</script>

<template>
  <article v-if="album" class="card">
    <h1>{{ album.name }}</h1>
    <p>
      Исполнитель:
      <RouterLink :to="{ name: 'artist', params: { id: album.artist_id } }">
        {{ album.artist }}
      </RouterLink>
    </p>
    <p>{{ album.year }} · {{ album.status_display }}</p>

    <hr>
    <JustList ds_name="songs" title="Песни" :id="album.id" />
  </article>
  <p v-else>Альбом не найден</p>
</template>

<style scoped>
.card {
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
}

hr {
  margin: 1rem 0;
  border: 0;
  border-top: 1px solid var(--color-border);
}
</style>
