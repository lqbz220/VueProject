<script setup>
import SingleImage from './SingleImage.vue';
import { useImageStore } from '../stores/imageStore.js';
import { storeToRefs } from 'pinia';

const imageStore = useImageStore();
const { images } = storeToRefs(imageStore)
</script>

<template>
  <v-sheet class="bg-black">
    <v-row>
      <v-col v-for="image in images" :key="image.id" class="d-flex child-flex" cols="4">
        <v-sheet class="pa-2 ma-2">
          <SingleImage :image="image" />
        </v-sheet>
        <template v-slot:placeholder>
          <v-row class="d-flex justify-center fill-height ma-1 align-center">
            <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-col>
    </v-row>
  </v-sheet>
</template>
