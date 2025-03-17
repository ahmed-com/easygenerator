<template>
  <v-card class="mx-auto pa-4" width="400" elevation="2">
    <v-card-title>{{ t("register.title") }}</v-card-title>
    <v-card-text>
      <signup-form />
    </v-card-text>
    <v-card-subtitle>
      <router-link :to="{ path: '/signin' }">
        {{ t("register.login") }}
      </router-link>
    </v-card-subtitle>
  </v-card>
</template>

<script setup lang="ts">
import SignupForm from "@/components/signup-form.vue";
import { type Locale, type MessageSchema } from "@/plugins/i18n";
import { useI18n } from "vue-i18n";

const { t } = useI18n<[MessageSchema], Locale>();
</script>
