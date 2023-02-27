<script setup>
import EditDialogContent from './EditDialogContent.vue';
import { useAppStore } from '../stores/app-store';
import { useImageStore } from '../stores/imageStore';
import { defineProps } from 'vue';

const appStore = useAppStore();
const imageStore = useImageStore();

const props = defineProps({
    image: Object,
});

console.log(props.image)
</script>

<template>
    <div class="text-center">
        <v-btn @click="imageStore.deleteImage(image.id)" size="small" icon>
            <v-icon icon="fa-solid fa-trash-can"></v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon icon="fa-solid fa-pen-to-square" size="small"></v-icon>
            <v-dialog v-model="appStore.modal" activator="parent" fullscreen>
                <EditDialogContent :image="image" />
            </v-dialog>
        </v-btn>
    </div>
</template>
