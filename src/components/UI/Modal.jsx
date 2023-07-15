import React from "react";
import styles from "./Modal.module.css";
import { ReactDOM } from "react-dom";
import { Fragment } from "react";
const BackDrop = (props) => {
  return <div className={styles.backdrop}></div>;
};

// this is the function that will receive what goes into the fragment
// the modal i.e the modal content
const ModalOverLay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};
const Modal = (props) => {
  return (
<Fragment>
    {/* create a portal for both overlays and the backdrop */}
    {/* by creating portals means that the content will be rendered outside of the dom */}
    {ReactDOM.createPortal(<BackDrop/>)}
    {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>)}

</Fragment>
);

export default Modal;
