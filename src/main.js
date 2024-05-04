import { createApp } from "vue";
import "./style.css";
import directusPlugin from "./plugins/directus.js";
import { componentRegister } from "./plugins/components.js";
import router from "./router/index.js";
import App from "./App.vue";

const app = createApp(App);

app.use(directusPlugin);
app.use(router);

componentRegister(app);

app.mount("#app");
