import { useState } from "react";

const useInput = (validateValue) => {
    const [value,setValue] = useState('');
    const [touched,setTouched] = useState(false);

    const isValid = validateValue(value);
    const hasError = !isValid && touched;

    const valueChangeHandler = (event) => {
        setValue(event.target.value);
    }
    const inputBlurHandler = () => {
        setTouched(true);
    }
    return {
        value,
        isValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler
    }
};

export default useInput;