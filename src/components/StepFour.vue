<template>
  <h2>Finishing up</h2>
  <p>Double-check everything looks OK before confirming</p>

  <div class="plan">
    <div class="heading">
      <p>{{ formValues.plan }} ({{ formValues.period }})</p>
      <button type="button">Change</button>
    </div>
    <p>
      {{
        plans[formValues.period || "monthly"][formValues.plan || "arcade"].price
      }}
    </p>
  </div>

  <div class="add-ons">
    <ul>
      <li v-show="formValues.service">
        <span>Online service</span>
        <span>+${{ formValues.period === "monthly" ? "1/mo" : "10/yr" }}</span>
      </li>
    </ul>
  </div>
  <div>
    <button type="button" @click="prevStep">go back</button>
    <button type="button" @click="nextStep">confirm</button>
  </div>
</template>

<script setup lang="ts">
import { plans } from "../constants/data";
import { StepValues } from "../types";

const { formValues, nextStep, prevStep } = defineProps<{
  formValues: StepValues;
  nextStep: () => void;
  prevStep: () => void;
}>();
console.log(formValues);
</script>

<style scoped>
.add-ons li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.plan {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
