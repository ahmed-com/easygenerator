<template>
  <v-btn icon @click="toggleTheme">
    <v-icon>{{ themeIcon }}</v-icon>
  </v-btn>
</template>

<script lang="ts" setup>
import { useTheme } from "vuetify";
import { computed } from "vue";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

const themeIcon = computed(() =>
  theme.global.current.value.dark ? "mdi-weather-night" : "mdi-weather-sunny"
);
</script>
