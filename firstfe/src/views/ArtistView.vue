<script setup lang="ts">
import JustArtist from '../components/JustArtist.vue'
import EditArtist from '../components/EditArtist.vue'
import {useRoute} from 'vue-router';
import {ref} from 'vue'

const is_edit = ref(false)

const route = useRoute()

function ToggleEdit() {
  is_edit.value = !is_edit.value
}

function editOff() {
  is_edit.value = false
}

</script>

<template>
  <main>
    <JustArtist v-if="!is_edit" :id="route.params.id"/>
    <EditArtist
      v-else
      :id="route.params.id"
      @editOffEvent="editOff()"
      />
    <button @click="ToggleEdit()">
    Редактировать
    </button>
  </main>
</template>
