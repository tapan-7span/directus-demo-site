<template>
  <section
    class="h-72 w-full text-white flex items-center justify-center"
    v-if="detail"
    :style="`background-image: url('${detail?.image}'); background-size:cover`"
  >
    <div class="flex items-center justify-center flex-col space-y-3">
      <h1 v-if="detail?.heading" class="text-6xl">{{ detail?.heading }}</h1>
      <h2 v-if="detail?.sub_heading" class="text-4xl">
        {{ detail?.sub_heading }}
      </h2>
      <router-link
        class="p-2 bg-slate-800 hover:bg-slate-900 border"
        v-if="detail?.navigations"
        :to="detail?.navigations?.navigation"
      >
        {{ detail?.navigations?.label }}
      </router-link>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { fetchSection } from "@/utils/directus.js";

const props = defineProps({
  sectionName: String,
  itemId: [String, Number],
});

const detail = ref(null);
const fields = [
  "image",
  "heading",
  "sub_heading",
  "navigations.label",
  "navigations.navigation",
];

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
