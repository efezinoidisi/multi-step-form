<template>
  <h2 class="step-title">Personal info</h2>
  <p class="step-desc">
    Please provide your name, email address and phone number.
  </p>
  <form @submit.prevent="handleSubmit" class="form-one">
    <label>
      name
      <input
        type="text"
        name="name"
        id="name"
        v-model="formData.values.name"
        placeholder="e.g. Stephen King"
        :class="formErrors.name ? 'invalid' : ''"
      />

      <span class="error" v-if="!!formErrors.name">{{ formErrors.name }}</span>
    </label>

    <label>
      email
      <input
        type="email"
        name="email"
        id="email"
        v-model="formData.values.email"
        placeholder="e.g. stepheking@lorem.com"
        :class="formErrors.email ? 'invalid' : ''"
      />
      <span class="error" v-if="!!formErrors.email">{{
        formErrors.email
      }}</span>
    </label>

    <label>
      phone
      <input
        type="tel"
        name="phone"
        id="phone"
        v-model="formData.values.phone"
        placeholder="e.g. +1 234 567 890"
        :class="formErrors.phone ? 'invalid' : ''"
      />

      <span class="error" v-if="!!formErrors.phone">{{
        formErrors.phone
      }}</span>
    </label>
    <button type="submit" class="next-btn">next step</button>
  </form>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";

const { formData, nextStep } = defineProps<{
  formData: {
    values: { name?: string; email?: string; phone?: string };
    completed: boolean;
  };
  nextStep: () => void;
}>();

const initErrors = {
  name: "",
  email: "",
  phone: "",
};

const formErrors = reactive<{ name: string; email: string; phone: string }>(
  initErrors
);

function validateForm(values: {
  name?: string;
  phone?: string;
  email?: string;
}) {
  const { name, phone, email } = values;

  if (!name || name.length < 4) {
    formErrors.name = "minimum of 4 characters";
  } else {
    formErrors.name = "";
  }

  if (!phone) {
    formErrors.phone = "This field is required";
  } else {
    formErrors.phone = "";
  }

  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!email || !emailRegex.test(email)) {
    formErrors.email = "invalid email";
  } else {
    formErrors.email = "";
  }

  if (name && phone && email) {
    return true;
  }

  return false;
}

watch(formData.values, () => {
  validateForm(formData.values);
});

function handleSubmit() {
  if (validateForm(formData.values)) {
    formData.completed = true;
    nextStep();
  }
}
</script>

<style scoped>
label {
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  color: var(--marine-blue);
  gap: 0.2rem;
  font-weight: 500;
  position: relative;
}

.error {
  position: absolute;
  top: 0;
  right: 0;
  color: var(--strawberry-red);
  text-transform: none;
}

.form-one {
  width: 100%;
  margin-top: 1.4rem;
  display: flex;
  flex-direction: column;
}

input {
  width: 100%;
  padding: 0.9rem;
  border-radius: 0.3rem;
  outline: none;
  border: 1px solid var(--light-gray);
  font-size: 1.2rem;
  color: var(--marine-blue);
  font-weight: 600;

  &:focus-within {
    border-color: var(--purplish-blue);
  }

  &[type="text"] {
    text-transform: capitalize;
  }

  &.invalid {
    border-color: var(--strawberry-red);
  }
}

input::placeholder {
  color: var(--cool-gray);
  text-transform: none;
}

button[type="submit"] {
  align-self: flex-end;
  position: fixed;
  bottom: 1rem;
  right: 0.8rem;
}

@media screen and (min-width: 47.8125rem) {
  button[type="submit"] {
    position: absolute;
  }
}
</style>
