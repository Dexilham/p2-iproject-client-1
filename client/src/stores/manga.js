import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
// https://ivea.herokuapp.com
// http://localhost:3000/customers/products

export const useMangaStore = defineStore("manga", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    mangas: [],
    manga: {},
    // wishlists: [],
    // qrcode: "",
    // totalPage: 0,
    // filter: { limit: 9, offset: 0, search: "" },
  }),
  actions: {
    async fetchMangas() {
      try {
        const { data } = await axios.get(`${this.baseUrl}/pub/mangas`);
        console.log(data, "<<< data");
        console.log(data.data, "<<< data data");

        this.mangas = data.data;
      } catch (error) {
        console.log(error);
        // console.log(error.response.data, "<<< err resp data");
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: `${error.response.data.message}`,
        });
      }
    },
    async fetchMangaById(id) {
      try {
        const { data } = await axios.get(`${this.baseUrl}/pub/mangas/${id}`);
        this.manga = data.data;
        console.log(data.data, "<<< data data");
      } catch (error) {
        console.log(error);
        console.log(error.response.data, "<<< err resp data");
      }
    },
  },
});
