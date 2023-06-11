<script setup>
import NavList from '../components/NavList.vue';
import ImageList from '../components/ImageList.vue';
import ToolBar from '../components/ToolBar.vue'
</script>

<template>
  <div class="ma-3">
    <ToolBar />
  </div>
  <div class="d-flex align-top">
    <v-card class="bg-grey-lighten-3 ma-2" width="30vw" height="100vh">
      <NavList />
    </v-card>
    <v-card class="bg-grey-lighten-3 ma-2" width="100vw" height="100vh">
      <ImageList />
    </v-card>
  </div>
</template>
