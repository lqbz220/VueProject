<script setup>
import { ref } from 'vue';
const modal = ref(false);
</script>

<template>
    <div class="text-center">
        <v-btn icon>
            <v-icon icon="fa-solid fa-plus"></v-icon>

            <v-dialog v-model="modal" activator="parent" width="300">
                <v-card>
                    <v-card-actions class="d-flex flex-column">
                        <v-spacer></v-spacer>
                        <v-img :src="`https://picsum.photos/210`" cover class="bg-grey-lighten-2 mt-6" :width="300"></v-img>
                        <div class="d-flex">
                            <v-btn color="green-darken-1" variant="text" @click="modal = false">
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
