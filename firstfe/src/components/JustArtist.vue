<script setup lang="ts">
import { get_artist, } from '@/tools/tools';
import {ref, onMounted} from "vue";
import JustList from './JustList.vue';

const props = defineProps<{
  id: string | number,
}>()

const data = ref({})

onMounted( () => {
  data.value = get_artist(props.id)

} )

</script>

<template>
  <div>
    <h2>
      {{ data.name }}
    </h2>
    {{ data.birth_year}}
  </div>
  <hr>
  <JustList ds_name="albums" :id="props.id" />
</template>

<style>
</style>
