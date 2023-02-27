<script setup>
import AddImage from './AddImage.vue';
import { useAppStore } from '../stores/app-store';

const appStore = useAppStore();

</script>

<template>
    <v-toolbar density="comfortable" title="Profolio">
        <v-spacer></v-spacer>
        <AddImage v-if="appStore.isAdmin" />
    </v-toolbar>
</template>
