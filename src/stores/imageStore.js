import { defineStore } from "pinia";

export const useImageStore = defineStore("imageStore", {
  state: () => ({
    images: [
      { id: 1, imageURL: "https://picsum.photos/200", description: "A good image" },
      { id: 2, imageURL: "https://picsum.photos/201", description: "Beautify picture" },
      { id: 3, imageURL: "https://picsum.photos/202", description: "A great image" },
      { id: 4, imageURL: "https://picsum.photos/203", description: "How pretty" },
      { id: 5, imageURL: "https://picsum.photos/204", description: "Summer time" },
      { id: 6, imageURL: "https://picsum.photos/205", description: "An empty space" },
      { id: 7, imageURL: "https://picsum.photos/206", description: "A good image" },
      { id: 8, imageURL: "https://picsum.photos/207", description: "Winter snow" },
      { id: 9, imageURL: "https://picsum.photos/208", description: "The city" },
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
