<template>
  <v-card class="mx-auto pa-4" width="400" elevation="2">
    <form>
      <v-text-field
        v-model="state.email"
        :error-messages="v$.email.$errors.map((e) => e.$message)"
        label="E-mail"
        required
        @blur="v$.email.$touch"
        @input="v$.email.$touch"
      ></v-text-field>

      <v-text-field
        hint="Enter your password to access this website"
        label="Password"
        :error-messages="v$.password.$errors.map((e) => e.$message)"
        v-model="state.password"
        required
        @blur="v$.password.$touch"
        @input="v$.password.$touch"
        type="password"
      ></v-text-field>

      <v-btn class="me-4" @click="v$.$validate"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </v-card>
</template>

<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength, password } from "@/validators";

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

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}
</script>
