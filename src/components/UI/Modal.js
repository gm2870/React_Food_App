import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import { Fragment } from 'react';

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
export default Modal;
