"use client";
import { ReactElement, useEffect, useState } from "react";
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
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [props.open]);

  return isShow ? (
    <div>
      <div className={clsx(styles.modal)} onClick={props.onClose}>
        <div className={styles.modalMain}>
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ModalUI;
