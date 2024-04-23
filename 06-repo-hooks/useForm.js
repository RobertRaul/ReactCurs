import { useState } from "react";

export const useForm = (initialstate = {}) => {
  const [formValues, setFormValues] = useState(initialstate);

  const resetear = () =>{
    setFormValues(initialstate)
  }

  const handleInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  return [formValues, handleInputChange,resetear];
};
