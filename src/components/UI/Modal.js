import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import { Fragment } from 'react';

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
export default Modal;
