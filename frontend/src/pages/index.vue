<template>
  <h1>{{ t('message') }}</h1>
</template>

<script lang="ts" setup>
import type { Locale, MessageSchema } from "@/plugins/i18n";
import { useI18n } from "vue-i18n";
const { t } = useI18n<[MessageSchema], Locale>();
</script>
