import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCart.module.css';
const HeaderCart = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
export default HeaderCart;
