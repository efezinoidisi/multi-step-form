<template>
  <h2 class="step-title">Pick add-ons</h2>
  <p class="step-desc">Add-ons help enhance your gaming experience.</p>

  <form @submit.prevent="handleSubmit" class="form-three">
    <label :class="formData.values.service ? 'checked' : ''">
      <input
        type="checkbox"
        name="online-service"
        id="online-service"
        v-model="formData.values.service"
      />
      <span class="text-wrap">
        <span class="heading">Online service</span>
        <span class="text">Access to multiplayer games</span>
      </span>

      <span>+${{ period === "monthly" ? "1/mo" : "10/yr" }}</span>
    </label>

    <label :class="formData.values.storage ? 'checked' : ''">
      <input
        type="checkbox"
        name="larger-storage"
        id="larger-storage"
        v-model="formData.values.storage"
      />
      <span class="text-wrap">
        <span class="heading">Larger storage</span>
        <span class="text">Extra 1TB of cloud save</span>
      </span>

      <span>+${{ period === "monthly" ? "2/mo" : "20/yr" }}</span>
    </label>

    <label :class="formData.values.profile ? 'checked' : ''">
      <input
        type="checkbox"
        name="customizable-profile"
        id="customizable-profile"
        v-model="formData.values.profile"
      />
      <span class="text-wrap">
        <span class="heading">Customizable profile</span>
        <span class="text">Custom theme on your profile</span>
      </span>

      <span>+${{ period === "monthly" ? "2/mo" : "20/yr" }}</span>
    </label>

    <div class="step-controls">
      <button type="button" @click="prevStep">go back</button>
      <button type="submit" class="next-btn">next step</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { Period, StepProps } from "../types";

const { formData, prevStep, nextStep, period } = defineProps<
  StepProps & {
    period?: Period;
  }
>();

function handleSubmit() {
  formData.completed = true;
  nextStep();
}
</script>

<style scoped>
.form-three {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  margin-top: 2rem;
}

label {
  border: 1px solid var(--light-gray);
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  gap: 1.3rem;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

  &.checked {
    border-color: var(--purplish-blue);
    background-color: var(--magnolia);
  }

  span:nth-child(3) {
    margin-left: auto;
  }

  .text-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .heading {
    color: var(--marine-blue);
    font-weight: 600;
    font-size: 1.2rem;
  }

  .text {
    color: var(--cool-gray);
  }

  &:hover {
    border-color: var(--purplish-blue);
  }
}

.step-controls {
  position: absolute;
}
</style>
