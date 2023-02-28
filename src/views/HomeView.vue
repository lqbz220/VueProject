<script setup>
import NavList from '../components/NavList.vue';
import ImageList from '../components/ImageList.vue';
import ToolBar from '../components/ToolBar.vue'
</script>

<template>
  <div class="ma-3">
    <ToolBar />
  </div>
  <div class="d-flex justify-center align-center">
    <v-card class="bg-grey-lighten-3 ma-2" width="500" height="950">
      <NavList />
    </v-card>
    <ImageList />
  </div>
</template>
