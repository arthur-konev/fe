<script setup lang="ts">
import { get_albums, get_artists,  } from '@/tools/tools';
import {ref, onMounted} from "vue";
import { RouterLink } from 'vue-router'


const props = defineProps<{
  title?: string,
  ds_name: string,
  id?: string | number | null,
}>()

const data = ref([])
let route_name;

onMounted( () => {
  if (props.ds_name == "artists") {
    data.value = get_artists()
    route_name = "artist"
  }
  else
  if (props.ds_name == "albums") {
    route_name = "album"
    if (props.id)
      data.value = get_albums(props.id)
    else
      data.value = get_albums()
  }
} )

</script>

<template>
  <div>
    <h3 v-if="title">
      {{ title }}
    </h3>
    <ul>
      <li v-for="x in data" :key="x['id']">
        <RouterLink :to="{name: route_name, params: {'id': x['id']}}">
          {{ x['name'] }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style>
</style>
