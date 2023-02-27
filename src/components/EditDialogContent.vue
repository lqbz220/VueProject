<script setup>
import { defineProps, ref } from "vue";
import { useAppStore } from '../stores/app-store.js';
import { useImageStore } from "../stores/imageStore";

const appStore = useAppStore();
const imageStore = useImageStore()
const props = defineProps({
    image: Object
});
console.log(props, '======')
let newDescription = ref(props.image.description);

const onSave = () => {
    console.log(props.image.id, newDescription.value)
    imageStore.editDescription(props.image.id, newDescription.value);
    appStore.toggleModal();
}

</script>

<template>
    <v-card>
        <v-card-actions class="d-flex flex-column">
            <v-spacer></v-spacer>
            <div class="d-flex align-center">
                <v-img :src="image.imageURL" cover class="bg-grey-lighten-2 mt-6 ma-6" :width="500"></v-img>
                <v-textarea label="Image Description" variant="outlined" :model-value="image.description"
                    v-model="newDescription"></v-textarea>
            </div>
            <div class="d-flex">
                <v-btn color="green-darken-1" variant="text" @click="onSave()">
                    Save
                </v-btn>
                <v-btn color="green-darken-1" variant="text" @click="appStore.toggleModal()">
                    Cancel
                </v-btn>
            </div>
        </v-card-actions>
    </v-card>
</template>
