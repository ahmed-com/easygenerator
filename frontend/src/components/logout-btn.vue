<template>
    <v-btn @click="logout">
        {{ t("logout") }}
    </v-btn>
</template>

<script setup lang="ts">
import type { Locale, MessageSchema } from "@/plugins/i18n";
import { useI18n } from "vue-i18n";
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

const { logout: deleteSession } = useAuthStore();
const { t } = useI18n<[MessageSchema], Locale>();

const logout = () => {
    deleteSession();
    router.push({ path: '/signin' });
};
</script>