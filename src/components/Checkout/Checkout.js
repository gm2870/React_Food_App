import { useContext, useRef } from 'react';
import CartContext from '../../store/cart-context';

import Input from '../UI/Input';
import classes from './Checkout.module.css';

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);
  const confirmHandler = (event) => {
    event.preventDefault();
    const vals = {};
    inputs.forEach((input) => {
      vals[input.id] = input.ref.current.value;
    });
    console.log(vals);
  };
  const inputs = [
    {
      id: 'name',
      type: 'text',
      label: 'Your Name',
      ref: useRef(),
    },
    {
      id: 'street',
      type: 'text',
      label: 'Street',
      ref: useRef(),
    },
    {
      id: 'postal',
      type: 'text',
      label: 'Postal Code',
      ref: useRef(),
    },
    {
      id: 'city',
      type: 'text',
      label: 'City',
      ref: useRef(),
    },
  ];
  const validateInput = (value) => value !== '';
  const inputHtml = inputs.map((input) => (
    <Input
      key={input.id}
      ref={input.ref}
      validateInput={validateInput}
      label={input.id}
      type={input.type}
      input={{
        id: input.id,
      }}
    />
  ));

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      {inputHtml}
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
