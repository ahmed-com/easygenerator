<template>
  <form @submit.prevent="v$.$touch">
    <v-alert v-if="authStore.error" type="error" dismissible :text="authStore.error"></v-alert>

    <v-text-field
      v-model="state.email"
      :error-messages="<any> v$.email.$errors.map((e) => e.$message)"
      :label="t('login.email')"
      required
      @blur="v$.email.$touch"
      @input="v$.email.$touch"
    ></v-text-field>

    <v-text-field
      :label="t('login.password')"
      :error-messages="<any> v$.password.$errors.map((e) => e.$message)"
      v-model="state.password"
      required
      @blur="v$.password.$touch"
      @input="v$.password.$touch"
      type="password"
    ></v-text-field>

    <v-btn class="me-4" @click="submit"> {{ t("login.submit") }} </v-btn>
    <v-btn @click="clear"> clear </v-btn>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength, password } from "@/validators";
import { type Locale, type MessageSchema } from "@/plugins/i18n";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import router from "@/router";

const { t } = useI18n<[MessageSchema], Locale>();
const authStore = useAuthStore();

watchEffect(() => {
  if (authStore.isAuthenticated) {
    router.push({ path: "/" });
  }
});

const initialState = {
  password: "",
  email: "",
};

const state = reactive({
  ...initialState,
});

const rules = {
  email: { required, email },
  password: { required, password, minLength: minLength(8) },
};

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();

  state.email = initialState.email;
  state.password = initialState.password;
}

function submit() {
  v$.value.$touch();
  if (v$.value.$invalid) {
    return;
  }

  authStore.login(state);
}
</script>
