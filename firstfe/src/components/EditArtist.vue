<script setup lang="ts">
import { get_artist, set_artist } from '@/tools/tools';
import {ref, onMounted} from "vue";
import JustList from './JustList.vue';
import router from '@/router';

const props = defineProps<{
  id: string | number,
}>()

const data = ref({})

const emit = defineEmits(["editOffEvent"])

onMounted( () => {
  data.value = get_artist(props.id)

} )

function handle_submit_event() {
  set_artist(props.id, data.value)
  emit("editOffEvent")
}

function handle_cancel_event() {
  emit("editOffEvent")
}

</script>

<template>
  <div>
  {{ props }}
    <form @submit.prevent="handle_cancel_event">

      <input type="text" name="artist_name" required v-model="data.name">
      <br>
      <input type="number" name="birth_year" v-model="data.birth_year">
      <button @click="handle_submit_event">
      Ok
      </button>
      <button @click="handle_cancel_event">
      Отмена
      </button>

    </form>
  </div>
</template>

<style>

</style>
