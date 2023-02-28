<script setup>
import { useAppStore } from "../stores/app-store.js";
import { defineProps, ref } from "vue";
import ImageButtons from "./ImageButtons.vue";

const appStore = useAppStore();

const props = defineProps({
  image: Object,
});

const image = ref(props.image);
const selectedImage = ref(null);
let overlay = ref(false);

const toggleFullScreen = (image) => {
  selectedImage.value = image;
  overlay.value = !overlay.value;
  console.log(selectedImage, overlay);
}
</script>

<template>
  <v-card>
    <v-img :src="image.imageURL" cover class="bg-grey-lighten-2 mt-6" :width="200"
      @click="toggleFullScreen(image)"></v-img>
    <v-card-title v-if="!appStore.isAdmin" class="text-h6">
      {{ image.description }}
    </v-card-title>
    <v-overlay v-model="overlay" v-if="selectedImage" class="align-center justify-center">
      <v-card class="d-flex align-center" elevation="1">
        <v-img :src="selectedImage ? selectedImage.imageURL : ''" contain @click="toggleFullScreen(null)" width="500"
          cover class="bg-grey-lighten-2 ma-2"></v-img>
        <v-card-title class="text-h6">{{ selectedImage.description }}</v-card-title>
      </v-card>
    </v-overlay>
    <div v-if="appStore.isAdmin">
      <ImageButtons :image="image" />
    </div>
  </v-card>
</template>

<style scoped>
</style>
