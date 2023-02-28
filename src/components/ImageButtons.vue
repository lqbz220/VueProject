<script setup>
import EditDialogContent from './EditDialogContent.vue';
import { useAppStore } from '../stores/app-store';
import { useImageStore } from '../stores/imageStore';
import { defineProps, ref } from 'vue';

const appStore = useAppStore();
const imageStore = useImageStore();

let cur = ref(0);
defineProps({
    image: Object,
});

const onClick = (id) => {
    cur.value = id;
    appStore.toggleModal();
}

</script>

<template>
    <div class="text-center">
        <v-btn @click="imageStore.deleteImage(image.id)" size="small" icon>
            <v-icon icon="fa-solid fa-trash-can"></v-icon>
        </v-btn>
        <v-btn icon @click="onClick(image.id)">
            <v-icon icon="fa-solid fa-pen-to-square" size="small"></v-icon>
        </v-btn>
        <v-dialog v-model="appStore.modal" fullscreen v-if="cur === image.id">
            <EditDialogContent :image="image" />
        </v-dialog>
    </div>
</template>
