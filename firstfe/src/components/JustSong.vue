<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { get_song } from '@/tools/tools'

const props = defineProps<{ id: string | number }>()
const song = computed(() => get_song(props.id))
</script>

<template>
  <article v-if="song" class="card">
    <h1>{{ song.title }}</h1>
    <p>
      Исполнитель:
      <RouterLink v-if="song.artist_id != null" :to="{ name: 'artist', params: { id: song.artist_id } }">
        {{ song.artist }}
      </RouterLink>
      <span v-else>{{ song.artist }}</span>
    </p>
    <p>
      Альбом:
      <RouterLink v-if="song.album_id != null" :to="{ name: 'album', params: { id: song.album_id } }">
        {{ song.album }}
      </RouterLink>
      <span v-else>{{ song.album }}</span>
    </p>
    <p>Трек № {{ song.track_number }} · {{ song.duration }}</p>
  </article>
  <p v-else>Песня не найдена</p>
</template>

<style scoped>
.card {
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
}
</style>
