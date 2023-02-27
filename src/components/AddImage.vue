<script setup>
import AddImageContent from './AddImageContent.vue';
import { useAppStore } from '../stores/app-store';

const appStore = useAppStore();

</script>

<template>
    <div class="text-center">
        <v-btn icon>
            <v-icon icon="fa-solid fa-plus"></v-icon>
            <v-dialog v-model="appStore.modal" activator="parent" width="auto">
                <AddImageContent />
            </v-dialog>
        </v-btn>
    </div>
</template>
