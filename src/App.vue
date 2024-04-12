<template>
  <p>{{ formSteps[1].values.plan }}</p>
  <p>{{ formSteps[0].completed }}</p>
  <StepOne
    v-if="currentStep === 0"
    :formData="formSteps[0]"
    :nextStep="nextStep"
  />

  <p>{{ currentStep }}</p>
  <StepTwo
    v-if="currentStep === 1"
    :formData="formSteps[1]"
    :nextStep="nextStep"
    :prevStep="prevStep"
  />
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import StepOne from "./components/StepOne.vue";
import StepTwo from "./components/StepTwo.vue";

const currentStep = ref(0);

type StepValues = {
  plan?: string;
  period?: "monthly" | "yearly";
  name?: string;
  email?: string;
  phone?: string;
};

type Step = {
  values: StepValues;
  completed: boolean;
};

const steps: Step[] = [
  {
    values: {
      name: "",
      phone: "",
      email: "",
    },
    completed: false,
  },

  {
    values: {
      plan: "",
      period: "yearly",
    },
    completed: false,
  },
];

const formSteps = reactive(steps);

function nextStep() {
  if (currentStep.value >= steps.length - 1) return;
  currentStep.value++;
}

function prevStep() {
  if (currentStep.value === 0) return;

  currentStep.value--;
}
</script>

<style scoped></style>
