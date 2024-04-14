<template>
  <h2 class="step-title">Finishing up</h2>
  <p class="step-desc">Double-check everything looks OK before confirming</p>
  <div class="wrap">
    <div class="plan">
      <div class="heading">
        <p>{{ formValues.plan }} ({{ formValues.period }})</p>
        <button type="button" @click="() => updateStep(1)">Change</button>
      </div>
      <p class="price">
        {{
          plans[formValues.period || "monthly"][formValues.plan || "arcade"]
            .price
        }}
      </p>
    </div>

    <ul class="add-ons">
      <li v-if="formValues.service">
        <span>Online service</span>
        <span>+${{ formValues.period === "monthly" ? "1/mo" : "10/yr" }}</span>
      </li>

      <li v-if="formValues.storage">
        <span>Larger storage</span>
        <span>+${{ formValues.period === "monthly" ? "2/mo" : "20/yr" }}</span>
      </li>

      <li v-if="formValues.profile">
        <span>Customizable profile</span>
        <span>+${{ formValues.period === "monthly" ? "2/mo" : "20/yr" }}</span>
      </li>
    </ul>
  </div>
  <p class="total">
    <span
      >Total (per
      {{ formValues.period === "monthly" ? "month" : "year" }})</span
    >
    <span
      >${{ total }}/{{ formValues.period === "monthly" ? "mo" : "yr" }}</span
    >
  </p>
  <div class="step-controls">
    <button type="button" @click="prevStep">go back</button>
    <button type="button" @click="nextStep" class="next-btn">Confirm</button>
  </div>
</template>

<script setup lang="ts">
import { plans, prices } from "../constants/data";
import { StepValues } from "../types";

const { formValues, nextStep, prevStep } = defineProps<{
  formValues: StepValues;
  nextStep: () => void;
  prevStep: () => void;
  updateStep: (value: number) => void;
}>();

const planPrice =
  prices[formValues.period || "monthly"][formValues.plan || "arcade"];

const addOnsPriceList = [
  prices.extras[formValues.profile ? "profile" : "none"],
  prices.extras[formValues.service ? "service" : "none"],
  prices.extras[formValues.storage ? "storage" : "none"],
];

const addOnsPrice = addOnsPriceList.reduce((sum, addon) => {
  if (formValues.period === "yearly") {
    return sum + addon * 10;
  }

  return sum + addon;
}, 0);
const total = planPrice + addOnsPrice;
</script>

<style scoped>
.wrap {
  margin-block: 2rem;
  background-color: var(--magnolia);
  padding: 1rem;
  border-radius: 0.5rem;
}

.add-ons {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.add-ons:has(li) {
  border-top: 1px solid var(--light-gray);
}

.add-ons li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--cool-gray);
  font-size: 1.1rem;

  span:nth-child(2) {
    color: var(--marine-blue);
  }
}

.plan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
}

.heading p {
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--marine-blue);
  text-transform: capitalize;
}

.heading button {
  text-decoration: underline;
  color: var(--cool-gray);
  font-size: 1.1rem;
  font-weight: 500;

  &:hover {
    color: var(--purplish-blue);
  }
}

.price {
  color: var(--marine-blue);
  font-weight: 600;
}

.total {
  display: flex;
  justify-content: space-between;
  color: var(--cool-gray);

  span:nth-child(2) {
    color: var(--purplish-blue);
    font-weight: 600;
    font-size: 1.2rem;
  }
}

.next-btn {
  background-color: var(--purplish-blue);
}
</style>
