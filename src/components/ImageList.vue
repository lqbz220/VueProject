<script setup>
import SingleImage from './SingleImage.vue';

import { useImageStore } from '../stores/imageStore.js';

const imageStore = useImageStore();
</script>

<template>
  <v-sheet class="bg-black">
    <v-row>
      <v-col class="d-flex child-flex" cols="4">
        <v-sheet class="pa-2 ma-2">
          <SingleImage
          v-for="(image, index) in imageStore.images"
          :image="image"
          :index="index"
          :key="image.id"
          />
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
