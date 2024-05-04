<template>
  <section class="border-4 border-black p-5 text-xl">
    <div>{{ detail }}</div>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { fetchSection } from "../utils/directus";

const detail = ref(null);
const fields = ["*.*.*"];

const props = defineProps({
  sectionName: String,
  itemId: String,
});

onMounted(() => {
  fetchDetails();
});

const fetchDetails = async () => {
  const response = await fetchSection(props.sectionName, props.itemId, {
    fields: fields,
  });

  if (response) {
    detail.value = response;
  }
};
</script>
