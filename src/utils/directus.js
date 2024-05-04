import { inject } from "vue";
const directusClient = inject("directusClient");

export function fetchItems() {
  return directusClient.getItems("collection_name");
}
