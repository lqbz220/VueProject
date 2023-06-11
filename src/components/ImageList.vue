<script setup>
import SingleImage from './SingleImage.vue';
import { useImageStore } from '../stores/imageStore.js';
import { storeToRefs } from 'pinia';
import { ref, onMounted, watch } from 'vue';

const imageStore = useImageStore();
const { images } = storeToRefs(imageStore);
const { category } = storeToRefs(imageStore);
const { getImages } = imageStore;
const displayedImages = ref([]);

const displayImages = async() => {
  await getImages();
  displayedImages.value = images.value.filter(image => image.category === imageStore.category);
  return displayedImages;
}

watch(category, () => {
  displayImages();
  })

onMounted(() => {
  displayImages();
});
</script>

<template>
  <v-sheet class="bg-grey-lighten-3">
    <v-row>
      <v-col v-for="image in displayedImages" :key="image.id" class="d-flex child-flex" cols="displayedImages.length">
        <v-sheet v-if="image.category===imageStore.category" class="pa-2 ma-2">
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
