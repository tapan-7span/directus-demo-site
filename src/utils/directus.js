import { inject } from "vue";
import { directus } from "../plugins/directus";
import { readItems, readItem } from "@directus/sdk";

export const fetchPageItems = async (fields = {}) => {
  return await directus.request(readItems("pages", fields));
};

export const fetchSection = async (collectionName, itemId, fields = {}) => {
  return await directus.request(readItem(collectionName, itemId, fields));
};
