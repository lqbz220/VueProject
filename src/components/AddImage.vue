<script setup>
import { ref } from 'vue';
import { useImageStore } from '../stores/imageStore';

const modal = ref(false);

const imageStore = useImageStore();
const addImage = (image) =>{
    imageStore.addImage(image);
    modal.value = false;
}
const image = {
    id: 9,
    imageURL: 'https://picsum.photos/210',
    description: 'Good'
}
</script>

<template>
    <div class="text-center">
        <v-btn icon>
            <v-icon icon="fa-solid fa-plus"></v-icon>

            <v-dialog v-model="modal" activator="parent" width="300">
                <v-card>
                    <v-card-actions class="d-flex flex-column">
                        <v-spacer></v-spacer>
                        <v-img :src="image.imageURL" cover class="bg-grey-lighten-2 mt-6" :width="300"></v-img>
                        <div class="d-flex">
                            <v-btn color="green-darken-1" variant="text" @click="addImage(image)">
                                Select
                            </v-btn>
                            <v-btn color="green-darken-1" variant="text" @click="modal = false">
                                Cancel
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-btn>
    </div>
</template>
