"use client";
import { FC, ReactElement, useEffect, useState } from "react";
import styles from "./index.module.css";
import clsx from "clsx";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactElement;
}

const ModalUI = (props: ModalProps) => {
  const [isShow, setShow] = useState<boolean>(false);
  useEffect(() => {
    setShow(props.open);
  }, [props.open]);

  return isShow ? (
    <div
      className={clsx(
        styles.modal,
        props.open ? styles.displayBlock : styles.displayNone
      )}
      onClick={props.onClose}
    >
      <div className={styles.modalMain}>
        {props.children}
        {/* <div className={styles.btnContainer}>
          <button type='button' className={styles.btn} onClick={props.onClose}>
            Close
          </button>
        </div> */}
      </div>
    </div>
  ) : (
    ""
  );
};

export default ModalUI;
