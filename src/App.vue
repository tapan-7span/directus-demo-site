<template>
  <div class="container mx-auto">
    <div class="">
      <template v-for="(item, i) in detail?.page_sections">
        <component
          :is="item?.item?.metadata?.component"
          :section-name="item?.collection"
          :item-id="item?.item?.id"
        />
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { fetchPageItems } from "./utils/directus";

const detail = ref(null);
const pageFields = [
  "slug",
  "page_title",
  "image",
  "url",
  "description",
  "keyword",
  "page_sections.item.id",
  "page_sections.collection",
  "page_sections.item.metadata.component",
];

onMounted(() => {
  fetchDetails();
});

const fetchDetails = async () => {
  const response = await fetchPageItems({ fields: pageFields });

  if (response && response.length) {
    detail.value = response[0];
  }
};
</script>
<style></style>
