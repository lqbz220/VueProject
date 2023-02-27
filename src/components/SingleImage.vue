// eslint-disable-next-line vue/multi-word-component-names
<script setup>
import { useAppStore } from "../stores/app-store.js";
import { defineProps } from "vue";
import ImageButtons from "./ImageButtons.vue";

const appStore = useAppStore();

defineProps({
  image: Object,
});
</script>

<template>
  <v-card>
    <v-img
      :src="image.imageURL"
      cover
      class="bg-grey-lighten-2 mt-6"
      :width="200"
    ></v-img>
    <v-card-title v-if="!appStore.isAdmin" class="text-h6">
      {{ image.description }}
    </v-card-title>
    <div v-if="appStore.isAdmin">
      <ImageButtons :image="image" />
    </div>
  </v-card>
</template>
