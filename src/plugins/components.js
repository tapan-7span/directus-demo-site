import DSectionHeader from "@/components/header.vue";
import DSectionHero from "@/components/hero.vue";
import DSectionCards from "@/components/cards.vue";
import directusSection from "@/components/directus-section.vue";

export const componentRegister = (appInstance) => {
  appInstance.component("DSectionHeader", DSectionHeader);
  appInstance.component("DSectionHero", DSectionHero);
  appInstance.component("DSectionCards", DSectionCards);
  appInstance.component("directusSection", directusSection);
};
