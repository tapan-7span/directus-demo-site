import { createDirectus, rest } from "@directus/sdk";

const client = createDirectus("http://localhost:8055/").with(rest());
export const directus = client;
export default {
  install: (app) => {
    app.config.globalProperties.directus = client;
  },
};
