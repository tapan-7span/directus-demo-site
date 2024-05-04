<template>
  <section
    class="bg-slate-900 text-white flex items-center justify-between py-4 px-4"
    v-if="detail"
  >
    <div><img :src="detail?.logo" class="h-8 w-8" /></div>
    <div class=" flex gap-2">
      <RouterLink 
        v-for="(item, i) in detail?.navigations"
        :to="item?.button_id?.navigation"
      >
        {{ item?.button_id?.label }}
      </RouterLink>
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
  "logo",
  "metadata.title",
  "metadata.description",
  "navigations.button_id.*",
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
