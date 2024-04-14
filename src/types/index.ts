export type StepValues = {
  plan?: "arcade" | "advanced" | "pro";
  period?: "monthly" | "yearly";
  name?: string;
  email?: string;
  phone?: string;
  profile?: boolean;
  storage?: boolean;
  service?: boolean;
};

export type Step = {
  values: StepValues;
  completed: boolean;
};
