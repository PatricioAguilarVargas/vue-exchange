import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router.js";
import { dollarFilter, percentFilter } from "@/filters.js";
import Chartkick from "vue-chartkick";
import "chartkick/chart.js";
import easySpinner from "vue-easy-spinner";

const app = createApp(App).use(router).use(Chartkick).use(easySpinner, {
  /*options*/
  prefix: "easy",
});

app.config.globalProperties.$filters = {
  dollarFilter,
  percentFilter,
};

app.mount("#app");
