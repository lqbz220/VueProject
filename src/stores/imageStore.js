import { defineStore } from "pinia";
import axios from 'axios';

export const useImageStore = defineStore("imageStore", {
  state: () => ({
    images: [],
  }),
  actions: {
    async getImages() {
      try {
        // this.images = [];
        // console.log(this.images, 'this.images')
        const { data: images } = await axios.get('/api/arts')
        console.log(images, this.images, '=======');
        this.images = images;
        // for(const image of images){
        //   this.images.push(image);
        // }
      } catch(err){
        console.log(err);
      }
    },
    async deleteImage(id) {
      try {
        await axios.delete(`api/arts/${id}`);

        this.images = this.images.filter((image) => {
          return image.id !== id;
        });
      } catch(err) {
        console.log(err);
      }
    },
    editDescription(id, text) {
      this.images = this.images.map((image) => {
        if (image.id === id) {
          image.description = text;
          return image;
        } else {
          return image;
        }
      });
    },
  },
});
