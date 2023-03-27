import { defineStore } from "pinia";
import axios from 'axios';

export const useImageStore = defineStore("imageStore", {
  state: () => ({
    images: [],
  }),
  actions: {
    async getImages() {
      try {
        const res = await axios.get('/api/arts')
        this.images = await res.data;
        console.log(this.images, 'storesssss')
      } catch(err){
        console.log(err);
      }
    },
    async deleteImage(id) {
      try {
        await axios.delete(`/api/arts/${id}`);

        this.images = this.images.filter((image) => {
          return image.id !== id;
        });
      } catch(err) {
        console.log(err);
      }
    },
   async editDescription(id, text) {
    try {
      await axios.put(`/api/arts/${id}`, { text });

      this.images = this.images.map((image) => {
        if (image.id === id) {
          image.description = text;
          return image;
        } else {
          return image;
        }
      });
    } catch (err) {
      console.log(err);
    }
    },
  },
});
