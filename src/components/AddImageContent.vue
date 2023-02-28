<script setup>
import { useAppStore } from '../stores/app-store.js';

const appStore = useAppStore();
</script>

<template>
    <v-card>
        <v-card-actions class="d-flex flex-column">
            <v-spacer></v-spacer>
            <v-img :src="`https://picsum.photos/210`" cover class="bg-grey-lighten-2 mt-6" :width="300"></v-img>
            <div class="d-flex">
                <v-btn color="green-darken-1" variant="text" @click="appStore.toggleModal()">
                    Select
                </v-btn>
                <v-btn color="green-darken-1" variant="text" @click="appStore.toggleModal()">
                    Cancel
                </v-btn>
            </div>
        </v-card-actions>
    </v-card>
</template>
