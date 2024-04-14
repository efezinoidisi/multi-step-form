<template>
  <h2>Pick add-ons</h2>
  <p>Add-ons help enhance your gaming experience.</p>

  <form @submit.prevent="handleSubmit">
    <label>
      <input
        type="checkbox"
        name="online-service"
        id="online-service"
        v-model="formData.values.service"
      />
      <span>
        <span class="heading">Online service</span>
        <span>Access to multiplayer games</span>
      </span>

      <span>+$1/mo</span>
    </label>

    <label>
      <input
        type="checkbox"
        name="larger-storage"
        id="larger-storage"
        v-model="formData.values.storage"
      />
      <span>
        <span class="heading">Larger storage</span>
        <span>Extra 1TB of cloud save</span>
      </span>

      <span>+$2/mo</span>
    </label>

    <label :class="formData.values.profile ? 'checked' : ''">
      <input
        type="checkbox"
        name="customizable-profile"
        id="customizable-profile"
        v-model="formData.values.profile"
      />
      <span>
        <span class="heading">Customizable profile</span>
        <span>Custom theme on your profile</span>
      </span>

      <span>+$2/mo</span>
    </label>

    <div>
      <button type="button" @click="prevStep">go back</button>
      <button type="submit">next step</button>
    </div>
  </form>

  {{ formData.values.profile }}
</template>

<script setup lang="ts">
const { formData, prevStep, nextStep } = defineProps<{
  formData: {
    values: {
      service?: boolean;
      storage?: boolean;
      profile?: boolean;
    };
    completed: boolean;
  };
  nextStep: () => void;
  prevStep: () => void;
}>();

function handleSubmit() {
  formData.completed = true;
  nextStep();
}
</script>

<style scoped>
.checked {
  background-color: red;
}
</style>
