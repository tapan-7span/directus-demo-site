import { createDirectus, rest } from "@directus/sdk";

const client = createDirectus("http://localhost:8055/").with(rest());

export const createClient = (vueApp) => {
  vueApp.provide("directusClient", client);
};
