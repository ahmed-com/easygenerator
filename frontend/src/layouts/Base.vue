<template>
  <v-responsive class="border rounded" height="100%">
    <v-app-bar class="px-3">
      <v-app-bar-title> {{ t("title") }} </v-app-bar-title>
      <v-spacer></v-spacer>
      <theme-btn></theme-btn>
    </v-app-bar>

    <v-main class="h-full my-4">
      <slot></slot>
    </v-main>
  </v-responsive>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import themeBtn from "@/components/theme-btn.vue";

const { t } = useI18n();
</script>
