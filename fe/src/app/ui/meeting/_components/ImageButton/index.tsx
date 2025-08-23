"use client";
import ModalUI from "@/src/app/ui/components/Modal";
import { useState } from "react";
import styles from "./index.module.css";
import Img, { ImgProps } from "../../../components/Img";
import React from "react";

interface ImageBtnProps extends ImgProps {
  onClickImgBtn?: React.MouseEventHandler<HTMLImageElement>;
}

// const ImageButton = React.forwardRef<HTMLImageElement, ImageBtnProps>(

const ImageButton = ({ ...props }: ImageBtnProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Img
        src={props.src}
        alt={props.alt}
        className={props.className}
        onClick={toggleModal}
        {...props}
      ></Img>
      {showModal && (
        <ModalUI open={showModal} onClose={toggleModal}>
          <Img
            src={props.src}
            alt={props.alt}
            className={styles.imageModal}
            onClick={props.onClickImgBtn}
          ></Img>
        </ModalUI>
      )}
    </>
  );
};

export default ImageButton;
