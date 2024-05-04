<template>
  <div>Cards : {{ props }}</div>
</template>
<script setup>
const props = defineProps({
  sectionName: String,
  itemId: [String, Number],
});
</script>
