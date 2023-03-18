<script setup>
import { useAppStore } from '../stores/app-store.js';

const appStore = useAppStore();

const toggleAdmin = () => {
  appStore.switchAdmin();
}
</script>

<template>
  <nav class="d-flex justify-center flex-column align-center nav-text">
    <routerLink v-if=appStore.isAdmin @click="toggleAdmin" to="/">Home</routerLink>
    <routerLink v-if=!appStore.isAdmin to="/about">About</routerLink>
    <div>
      <v-btn v-if=!appStore.isAdmin @click="toggleAdmin">Admin</v-btn>
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

