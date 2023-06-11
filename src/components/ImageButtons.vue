<script setup>
import EditDialogContent from './EditDialogContent.vue';
import { useAppStore } from '../stores/app-store';
import { useImageStore } from '../stores/imageStore';
import { defineProps, ref } from 'vue';

const appStore = useAppStore();
const imageStore = useImageStore();
const cur = ref(0);

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
        <v-btn
            class="ma-2"
            @click="imageStore.deleteImage(image.id)"
            size="small"
            icon="fa-trash"
        >
        </v-btn>
        <v-btn
            icon="fa fa-plus"
            @click="onClick(image.id)"
            size="small"
        >
        </v-btn>
        <v-dialog v-model="appStore.modal" fullscreen v-if="cur === image.id">
            <EditDialogContent :image="image" />
        </v-dialog>
    </div>
</template>
