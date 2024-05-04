import { createApp } from "vue";
import "./style.css";
import { createClient } from "./plugins/directus.js";

import App from "./App.vue";

const app = createApp(App);
createClient(app);
app.mount("#app");
