<script setup lang="ts">
import { get_album, } from '@/tools/tools';
import {ref, onMounted} from "vue";
import { RouterLink } from 'vue-router'

const props = defineProps<{
  id: string | number,
}>()

const data = ref({})

onMounted( () => {
  data.value = get_album(props.id)

} )

</script>

<template>
  <div>
    <h2>
      {{ data.name }}
      (
        <RouterLink :to="{name: 'artist', params: {'id': data['artist_id']}}">
          {{  data['artist'] }}
        </RouterLink>
      )
    </h2>

    <br>
    {{ data.year}}
    <br>
    {{ data.status_display}}
  </div>
</template>

<style>
</style>
