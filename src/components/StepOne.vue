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
        required
      />
    </label>

    <label>
      email
      <input
        type="email"
        name="email"
        id="email"
        v-model="formData.values.email"
        placeholder="e.g. stepheking@lorem.com"
        required
      />
    </label>

    <label>
      phone
      <input
        type="tel"
        name="phone"
        id="phone"
        v-model="formData.values.phone"
        placeholder="e.g. +1 234 567 890"
        required
      />
    </label>
    <button type="submit" class="next-btn">next step</button>
  </form>
</template>

<script setup lang="ts">
const { formData, nextStep } = defineProps<{
  formData: {
    values: { name?: string; email?: string; phone?: string };
    completed: boolean;
  };
  nextStep: () => void;
}>();

function handleSubmit() {
  const { name, phone, email } = formData.values;

  if (name && phone && email) {
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

  &:focus-within {
    border-color: var(--purplish-blue);
  }

  &.error {
    border-color: var(--strawberry-red);
  }
}

input::placeholder {
  color: var(--cool-gray);
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
