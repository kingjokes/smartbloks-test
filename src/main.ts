import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { router } from "./routes";
import { PiniaSharedState } from "pinia-shared-state";
import "./style.css";

const app = createApp(App);

const pinia = createPinia();

pinia.use(
  PiniaSharedState({
    enable: true,
    initialize: false,
    type: "localstorage",
  })
);
app.use(router);
app.use(pinia);
app.mount("#app");
