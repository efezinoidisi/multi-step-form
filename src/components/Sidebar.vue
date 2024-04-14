<template>
  <div class="container">
    <ul>
      <li
        v-for="item in data"
        class="step-wrap"
        :class="item.index - 1 === currentStep ? 'active' : ''"
        @click="currentStep = item.index - 1"
      >
        <span class="index">{{ item.index }}</span>
        <p>
          <span class="step">{{ item.step }}</span>
          <span class="title">{{ item.title }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { currentStep } = defineProps<{
  currentStep: number;
}>();

const data = [
  {
    index: 1,
    step: "step 1",
    title: "your info",
  },
  {
    index: 2,
    step: "step 2",
    title: "select plan",
  },

  {
    index: 3,
    step: "step 3",
    title: "add-ons",
  },
  {
    index: 4,
    step: "step 4",
    title: "summary",
  },
];
</script>

<style scoped>
.container {
  --background: url("../assets/images/bg-sidebar-mobile.svg");
  --height: 30vh;

  background-image: var(--background);
  min-height: var(--height);
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 2.3rem;
}

ul {
  display: flex;
  gap: 1.3rem;
}

.step-wrap p {
  display: none;
}

.index {
  border: 1px solid var(--white);
  color: white;
  border-radius: 50%;
  padding: 0.5rem 0.8rem;
}

.active {
  .index {
    background-color: var(--light-blue);
    color: var(--marine-blue);
    border: none;
  }
}

@media screen and (min-width: 47.8125rem) {
  .container {
    --background: url("../assets/images/bg-sidebar-desktop.svg");
    --height: 100%;

    justify-content: flex-start;
    align-items: flex-start;
    padding: 4rem 1.4rem;
    border-radius: 0.5rem;
  }

  .step-wrap {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    gap: 0.7rem;
  }

  .step-wrap p {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    color: var(--white);
  }

  .step-wrap .step {
    color: var(--light-gray);
  }

  ul {
    flex-direction: column;
  }
}
</style>
