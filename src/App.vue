<template>
  <div class="wrapper">
    <Sidebar :currentStep="currentStep" />
    <main>
      <StepOne
        v-if="currentStep === 0"
        :formData="formSteps[0]"
        :nextStep="nextStep"
      />
      <StepTwo
        v-if="currentStep === 1"
        :formData="formSteps[1]"
        :nextStep="nextStep"
        :prevStep="prevStep"
      />

      <StepThree
        v-if="currentStep === 2"
        :formData="formSteps[2]"
        :nextStep="nextStep"
        :prevStep="prevStep"
        :period="stepValues.period"
      />

      <StepFour
        v-if="currentStep === 3 && !isFormCompleted"
        :formValues="stepValues"
        :nextStep="nextStep"
        :prevStep="prevStep"
      />
      <Success v-if="isFormCompleted" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import Success from "./components/Confirmation.vue";
import Sidebar from "./components/Sidebar.vue";
import StepFour from "./components/StepFour.vue";
import StepOne from "./components/StepOne.vue";
import StepThree from "./components/StepThree.vue";
import StepTwo from "./components/StepTwo.vue";
import { Step } from "./types";

const isFormCompleted = ref(false);
const currentStep = ref(0);

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
      plan: "arcade",
      period: "yearly",
    },
    completed: false,
  },

  {
    values: {
      profile: false,
      service: false,
      storage: false,
    },
    completed: false,
  },
];

const formSteps = reactive(steps);

const stepValues = computed(() => {
  return formSteps
    .map((step) => step.values)
    .reduce((sum, step) => {
      return { ...sum, ...step };
    }, {});
});

function nextStep() {
  if (
    currentStep.value === formSteps.length &&
    formSteps.every((step) => step.completed)
  ) {
    isFormCompleted.value = true;
  }
  if (currentStep.value >= formSteps.length) return;
  currentStep.value++;
}

function prevStep() {
  if (currentStep.value === 0) return;

  currentStep.value--;
}
</script>

<style scoped>
.wrapper {
  display: grid;
}

main {
  margin: -4.8rem auto 4rem;
  background-color: var(--white);
  width: 90%;
  padding: 2rem 1rem;
  border-radius: 8px;
  min-height: 30vh;
}

@media screen and (min-width: 47.8125rem) {
  .wrapper {
    grid-template-columns: repeat(3, 1fr);
    background-color: var(--white);
    padding: 0.6rem;
    height: 80vh;
    width: 85%;
    margin-inline: auto;
    border-radius: 0.5rem;
    position: relative;
  }

  main {
    grid-column: span 2;
    margin-block: 0;
    position: relative;
  }
}

@media screen and (min-width: 64rem) {
  .wrapper {
    width: 70%;
  }
}
</style>
