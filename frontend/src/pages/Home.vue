<template>
  <h1>{{ t("message") }}</h1>
  <p v-if="authStore.user">
    logged in
    {{ authStore.user.name }}
  </p>
</template>

<script lang="ts" setup>
import type { Locale, MessageSchema } from "@/plugins/i18n";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";

const { t } = useI18n<[MessageSchema], Locale>();
const authStore = useAuthStore();
</script>
