<template>
  <h2 class="step-title">Select your plan</h2>
  <p class="step-desc">You have the option of monthly or yearly billing</p>

  <form @submit.prevent="handleSubmit" class="form-two">
    <div class="plan-wrap">
      <label
        class="plan__label"
        :class="formData.values.plan === 'arcade' ? 'active' : ''"
      >
        <img src="../assets/images/icon-arcade.svg" alt="" />
        <input
          type="radio"
          name="plan"
          id="arcade"
          value="arcade"
          v-model="formData.values.plan"
          class="plan"
        />

        <span class="wrap">
          <span class="heading">arcade</span>
          <span>{{
            plans[formData.values.period ? formData.values.period : "yearly"]
              .arcade.price
          }}</span>
          <span class="visible">{{
            plans[formData.values.period ? formData.values.period : "yearly"]
              .arcade.free
          }}</span>
        </span>
      </label>
      <label
        class="plan__label"
        :class="formData.values.plan === 'advanced' ? 'active' : ''"
      >
        <img src="../assets/images/icon-advanced.svg" alt="" />
        <input
          type="radio"
          name="plan"
          id="advanced"
          value="advanced"
          v-model="formData.values.plan"
          class="plan"
        />

        <span class="wrap">
          <span class="heading">advanced</span>
          <span class="visible">{{
            plans[formData.values.period ? formData.values.period : "yearly"]
              .advanced.price
          }}</span>
          <span>{{
            plans[formData.values.period ? formData.values.period : "yearly"]
              .advanced.free
          }}</span>
        </span>
      </label>
      <label
        class="plan__label"
        :class="formData.values.plan === 'pro' ? 'active' : ''"
      >
        <img src="../assets/images/icon-pro.svg" alt="" />
        <input
          type="radio"
          name="plan"
          id="pro"
          value="pro"
          v-model="formData.values.plan"
          class="plan"
        />

        <span class="wrap">
          <span class="heading">pro</span>
          <span>{{
            plans[formData.values.period ? formData.values.period : "yearly"]
              .pro.price
          }}</span>
          <span class="visible">{{
            plans[formData.values.period ? formData.values.period : "yearly"]
              .pro.free
          }}</span>
        </span>
      </label>
    </div>

    <div class="period__wrap">
      <p>monthly</p>
      <div class="input__wrap">
        <input
          type="radio"
          name="period"
          id="monthly"
          value="monthly"
          v-model="formData.values.period"
        />
        <label for="monthly">
          <span class="sr-only">monthly</span>
        </label>
        <input
          type="radio"
          name="period"
          id="yearly"
          value="yearly"
          v-model="formData.values.period"
        />
        <label for="yearly">
          <span class="sr-only">yearly</span>
        </label>
      </div>
      <label for="yearly"> yearly </label>
    </div>
    <div class="step-controls">
      <button type="button" @click="prevStep">go back</button>
      <button type="submit" class="next-btn">next step</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { plans } from "../constants/data";
const { formData, nextStep, prevStep } = defineProps<{
  formData: {
    values: {
      plan?: string;
      period?: "monthly" | "yearly";
    };
    completed: boolean;
  };
  nextStep: () => void;
  prevStep: () => void;
}>();

function handleSubmit() {
  const { plan, period } = formData.values;

  if (plan && period) {
    formData.completed = true;
    nextStep();
  }
}
</script>

<style scoped>
.form-two {
  width: 100%;
  margin-top: 2rem;
}

.visible {
  animation: fade-out 3s 0.5s 1;
}

.plan-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

input.plan {
  display: none;
}

.plan__label {
  display: flex;
  gap: 0.6rem;
  border: 1px solid var(--light-gray);
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 0.5rem;
  align-items: flex-start;

  .wrap {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: var(--marine-blue);

    span:nth-child(2) {
      color: var(--cool-gray);
    }
  }

  .heading {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1.3rem;
  }

  &.active {
    border-color: var(--purplish-blue);
    background-color: var(--magnolia);
  }

  &:hover {
    border-color: var(--purplish-blue);
  }
}

.period__wrap {
  display: flex;
  gap: 1.4rem;
  background-color: var(--magnolia);
  justify-content: center;
  padding: 0.6rem;
  border-radius: 0.5rem;
  align-items: center;
  text-transform: capitalize;
  margin-top: 2rem;

  .input__wrap {
    background-color: black;
    border-radius: 1.3rem;
    padding: 0.2rem 0.1rem;
    height: 1.5rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    label {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      background-color: inherit;
      border-radius: 50%;
      transition: all 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }

    input[type="radio"] {
      display: none;

      &:checked + label {
        background-color: white;
      }
    }
  }
}

.step-controls {
  position: absolute;
}

@media screen and (min-width: 47.8125rem) {
  main {
    position: relative;
  }

  .plan-wrap {
    flex-direction: row;
    gap: 0.5rem;
  }

  .plan__label {
    flex-direction: column;
    gap: 3rem;
    flex: 1;
  }

  .period__wrap {
    padding-block: 0.8rem;
  }
}

@keyframes fade-out {
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
}
</style>
