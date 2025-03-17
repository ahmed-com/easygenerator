<template>
  <v-responsive class="border rounded" height="100%">
    <v-app-bar class="px-3">
      <v-app-bar-title> {{ t("title") }} </v-app-bar-title>
      <v-spacer></v-spacer>
      <theme-btn></theme-btn>
      <logout-btn v-if="isAuthenticated"></logout-btn>
    </v-app-bar>

    <v-main class="h-full my-4">
      <slot></slot>
    </v-main>
  </v-responsive>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import ThemeBtn from "@/components/theme-btn.vue";
import logoutBtn from "@/components/logout-btn.vue";

const { t } = useI18n();
const { isAuthenticated } = useAuthStore();
</script>
