import react from 'react';
import useInput from '../../hooks/use-input';
import classes from './Input.module.css';

const Input = react.forwardRef((props, ref) => {
  const { value, hasError, valueChangeHandler, inputBlurHandler } = useInput(
    props.defaultVal,
    props.validateInput
  );
  const classNames = !hasError
    ? classes.control
    : `${classes.control} ${classes.invalid}`;
  return (
    <div className={classNames}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        value={value}
        onBlur={inputBlurHandler}
        onChange={valueChangeHandler}
        ref={ref}
        {...props.input}
      />
      {hasError && <p>Please enter valid input</p>}
    </div>
  );
});

export default Input;
