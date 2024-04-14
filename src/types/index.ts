export type Period = "monthly" | "yearly";

export type StepValues = {
  plan?: "arcade" | "advanced" | "pro";
  period?: Period;
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

export type StepProps = {
  formData: {
    values: StepValues;
    completed: boolean;
  };
  nextStep: () => void;
  prevStep: () => void;
};
