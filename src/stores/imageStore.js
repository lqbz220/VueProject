import { defineStore } from "pinia";

export const useImageStore = defineStore("imageStore", {
  state: () => ({
    images: [
      { id: 1, imageURL: "https://picsum.photos/200", description: "good" },
      { id: 2, imageURL: "https://picsum.photos/201", description: "great" },
      { id: 3, imageURL: "https://picsum.photos/202", description: "great" },
      { id: 4, imageURL: "https://picsum.photos/203", description: "great" },
      { id: 5, imageURL: "https://picsum.photos/204", description: "great" },
      { id: 6, imageURL: "https://picsum.photos/205", description: "great" },
      { id: 7, imageURL: "https://picsum.photos/206", description: "great" },
      { id: 8, imageURL: "https://picsum.photos/207", description: "great" },
      { id: 9, imageURL: "https://picsum.photos/208", description: "great" },
    ],
  }),
  actions: {
    deleteImage(id) {
      this.images = this.images.filter((image) => {
        return image.id !== id;
      });
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
