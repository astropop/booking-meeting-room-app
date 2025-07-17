"use client";
import ImageOpt, { ImageNewType } from "@/src/components/ImageOpt";
import ModalUI from "@/src/components/Modal";
import { useState } from "react";
import styles from "./index.module.css";
const ImageButton = (props: ImageNewType) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <ImageOpt
        src={props.src}
        alt={props.alt}
        className={props.className}
        onClick={toggleModal}
      ></ImageOpt>
      <ModalUI open={showModal} onClose={toggleModal}>
        <ImageOpt
          src={props.src}
          alt={props.alt}
          className={styles.imageModal}
          // fill={props.fill}
          onClick={props.onClick}
        ></ImageOpt>
      </ModalUI>
      {/* <button type='button' className='btn' onClick={toggleModal}>
        Open
      </button> */}
    </>
  );
};

export default ImageButton;
