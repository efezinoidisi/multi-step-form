import { Step } from "../types";

export const plans = {
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

export const prices = {
  monthly: {
    arcade: 9,
    advanced: 12,
    pro: 15,
  },

  yearly: {
    arcade: 90,
    advanced: 120,
    pro: 150,
  },

  extras: {
    service: 1,
    profile: 2,
    storage: 2,
    none: 0,
  },
};

export const steps: Step[] = [
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

export const sidebar = [
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
