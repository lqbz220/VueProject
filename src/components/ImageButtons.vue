<script setup>
import EditDialogContent from './EditDialogContent.vue';
import { useAppStore } from '../stores/app-store';
import { useImageStore } from '../stores/imageStore';
import { defineProps, reactive } from 'vue';

const appStore = useAppStore();
const imageStore = useImageStore();
let imageInfo = reactive ({});
const props = defineProps({
    image: Object,
});
const onClick = (item) => {
    imageInfo = item;
    console.log(imageInfo)
}

</script>

<template>
    <div class="text-center">
    <v-btn @click="imageStore.deleteImage(image.id)" size="small" icon>
        <v-icon icon="fa-solid fa-trash-can"></v-icon>
    </v-btn>

    <v-btn icon @click="onClick(image)">
        <v-icon icon="fa-solid fa-pen-to-square" size="small"></v-icon>
    </v-btn>

    <v-dialog v-model="appStore.modal" activator="parent" fullscreen>
      <v-card>
            <v-card-actions class="d-flex flex-column">
                    <v-spacer></v-spacer>
                    <div class="d-flex align-center">
                        <p>{{ imageInfo }}</p>
                        <v-img :src="imageInfo.imageURL" cover class="bg-grey-lighten-2 mt-6 ma-6" :width="500"></v-img>
                        <!-- <v-textarea label="Image Description" variant="outlined" :model-value="image.description"
                        v-model="newDescription"></v-textarea> -->
                    </div>
                    <!-- <div class="d-flex">
                    <v-btn color="green-darken-1" variant="text" @click="onSave()">
                        Save
                    </v-btn>
                    <v-btn color="green-darken-1" variant="text" @click="appStore.toggleModal()">
                        Cancel
                    </v-btn>
                </div> -->
                </v-card-actions>
            </v-card>
        </v-dialog>




    </div>
</template>
