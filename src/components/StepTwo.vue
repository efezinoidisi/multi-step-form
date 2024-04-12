<template>
  <h2>step 2</h2>

  <form @submit.prevent="handleSubmit">
    <label class="plan__label">
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
        <span>{{
          plans[formData.values.period ? formData.values.period : "yearly"]
            .arcade.free
        }}</span>
      </span>
    </label>
    <label class="plan__label">
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
        <span>{{
          plans[formData.values.period ? formData.values.period : "yearly"]
            .advanced.price
        }}</span>
        <span>{{
          plans[formData.values.period ? formData.values.period : "yearly"]
            .advanced.free
        }}</span>
      </span>
    </label>
    <label class="plan__label">
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
          plans[formData.values.period ? formData.values.period : "yearly"].pro
            .price
        }}</span>
        <span>{{
          plans[formData.values.period ? formData.values.period : "yearly"].pro
            .free
        }}</span>
      </span>
    </label>

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
    <button type="button" @click="prevStep">go back</button>
    <button type="submit">next step</button>
  </form>
</template>

<script lang="ts" setup>
const plans = {
  monthly: {
    arcade: { price: "$9/mo", free: "" },
    advanced: { price: "$12/mo", free: "" },
    pro: { price: "$15/mo", free: "" },
  },

  yearly: {
    arcade: { price: "$90/yr", free: "2 months free" },
    advanced: { price: "$120/yr", free: "2 months free" },
    pro: { price: "$150/yr", free: "2 months free" },
  },
};
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
input.plan {
  display: none;
}

.plan__label {
  display: flex;
  gap: 0.6rem;
  border: 1px solid black;
  width: fit-content;
  padding: 0.5rem 1rem;

  .wrap {
    display: flex;
    flex-direction: column;
  }

  .heading {
    text-transform: capitalize;
    font-weight: 600;
  }
}

.period__wrap {
  display: flex;
  gap: 0.7rem;

  .input__wrap {
    background-color: black;
    border-radius: 1rem;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    label {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      background-color: inherit;
      border-radius: 50%;
    }

    input[type="radio"] {
      display: none;

      &:checked + label {
        background-color: white;
      }
    }
  }
}
</style>
