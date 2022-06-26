import { useState } from 'react';

const useInput = (initialValue = '', validateValue) => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);

  const isValid = validateValue(value);
  const hasError = !isValid && touched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };
  const inputBlurHandler = () => {
    setTouched(true);
  };
  return {
    value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
