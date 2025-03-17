<template>
  <form @submit.prevent="v$.$touch">
    <v-alert v-if="authStore.error" type="error" dismissible :text="authStore.error"></v-alert>

    <v-text-field
      v-model="state.name"
      :error-messages="<any> v$.name.$errors.map((e) => e.$message)"
      :label="t('register.name')"
      required
      @blur="v$.name.$touch"
      @input="v$.name.$touch"
    ></v-text-field>

    <v-text-field
      v-model="state.email"
      :error-messages="<any> v$.email.$errors.map((e) => e.$message)"
      :label="t('register.email')"
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

    <!-- <v-text-field
      :label="t('register.confirmPassword')"
      :error-messages="<any> v$.confirmPassword.$errors.map((e) => e.$message)"
      v-model="state.confirmPassword"
      required
      @blur="v$.confirmPassword.$touch"
      @input="v$.confirmPassword.$touch"
      type="password"
    ></v-text-field> -->

    <v-btn class="me-4" @click="submit"> {{ t("register.submit") }} </v-btn>
    <v-btn @click="clear"> clear </v-btn>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength, password, sameAs } from "@/validators";
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
  name: "",
  password: "",
  email: "",
  confirmPassword: "",
};

const state = reactive({
  ...initialState,
});

const rules = {
  name: { required, minLength: minLength(3) },
  email: { required, email },
  password: { required, password, minLength: minLength(8) },
  //   confirmPassword: { required, confirmPassword: sameAs(state.password) },
};

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();

  state.name = initialState.name;
  state.email = initialState.email;
  state.password = initialState.password;
  state.confirmPassword = initialState.confirmPassword;
}

function submit() {
  v$.value.$touch();
  if (v$.value.$invalid) {
    return;
  }

  authStore.register(state);
}
</script>
