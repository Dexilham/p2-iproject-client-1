import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useCustomerStore = defineStore("customer", {
  state: () => ({
    isLogin: false,
    baseUrl: "http://localhost:3000",
  }),
  actions: {
    submitLogin(payload) {
      console.log("masuk store");
      return axios({
        method: "post",
        url: this.baseUrl + "/pub/login",
        data: payload,
      });
    },
    async submitLogout() {
      localStorage.removeItem("access_token");
      this.isLogin = false;
      this.router.push("/login");
      let timerInterval;
      Swal.fire({
        icon: "success",
        title: "You're now logged out!",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    },
    submitRegister(payload) {
      // console.log("masuk store");
      return axios({
        method: "post",
        url: this.baseUrl + "/pub/register",
        data: payload,
      });
    },
  },
});
