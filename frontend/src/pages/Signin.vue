<template>
  <v-card class="mx-auto pa-4" width="400" elevation="2">
    <v-card-title>{{ t("login.title") }}</v-card-title>
    <v-card-text>
      <signin-form />
    </v-card-text>
    <v-card-subtitle>
      <router-link :to="{ path: '/signup' }">
        {{ t("login.register") }}
      </router-link>
    </v-card-subtitle>
  </v-card>
</template>

<script setup lang="ts">
import signinForm from "@/components/signin-form.vue";
import { type Locale, type MessageSchema } from "@/plugins/i18n";
import { useI18n } from "vue-i18n";

const { t } = useI18n<[MessageSchema], Locale>();
</script>
