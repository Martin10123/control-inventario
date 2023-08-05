import { useState } from "react";
import { PropsChangeInput } from "../components/Table/interfaces/interfaces";

export const useForm = <T extends object>(initialForm: T) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: PropsChangeInput) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
