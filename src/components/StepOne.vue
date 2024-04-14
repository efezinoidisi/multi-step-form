<template>
  <h2>Personal info</h2>
  <p>Please provide your name, email address and phone number.</p>
  <form @submit.prevent="handleSubmit">
    <label>
      name
      <input type="text" name="name" id="name" v-model="formData.values.name" />
    </label>

    <label>
      email
      <input
        type="email"
        name="email"
        id="email"
        v-model="formData.values.email"
      />
    </label>

    <label>
      phone
      <input
        type="tel"
        name="phone"
        id="phone"
        v-model="formData.values.phone"
      />
    </label>
    <button type="submit">next step</button>
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
}

input {
  width: 100%;
  padding: 0.6rem;
  border-radius: 0.5rem;
  outline: none;
  border: 1px solid black;
}

form {
  width: 70%;
  margin-inline: auto;
}
</style>
