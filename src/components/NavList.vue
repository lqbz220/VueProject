<script setup>
import { useAppStore } from '../stores/app-store.js';
import { useImageStore } from '../stores/imageStore';

const appStore = useAppStore();
const imageStore = useImageStore();

const toggleAdmin = () => {
  appStore.switchAdmin();
}
</script>

<template>
  <nav class="d-flex justify-center flex-column align-center nav-text">
    <routerLink v-if=!appStore.isAdmin to="/charcoal" @click="imageStore.category='charcoal'">Charcoal</routerLink>
    <routerLink v-if=!appStore.isAdmin to="/colors" @click="imageStore.category='colors'">Colors</routerLink>
    <routerLink v-if=!appStore.isAdmin to="/pencils" @click="imageStore.category='pencil'">Pencil Sketches</routerLink>
    <routerLink v-if=!appStore.isAdmin to="/about">About</routerLink>
    <routerLink v-if=appStore.isAdmin @click="toggleAdmin()" to="/">Home</routerLink>
    <div>
      <v-btn v-if=!appStore.isAdmin @click="toggleAdmin()">Admin</v-btn>
    </div>
  </nav>
</template>

<style scoped>
.nav-text {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 10rem;
  color: black;
}
</style>

