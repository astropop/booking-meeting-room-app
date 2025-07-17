"use client";
import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";

export type ImageNewType = {
  src: string;
  alt: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
  // fill?: boolean;
};

const ImageOpt = (props: ImageNewType) => {
  const [errorImg, setErrorImg] = useState(false);

  useEffect(() => {
    setErrorImg(false);
  }, [props.src]);

  return (
    <Image
      src={errorImg ? "/meeting/No-Image.png" : props.src}
      alt={props.alt}
      className={props.className}
      onError={() => setErrorImg(true)}
      width={400}
      height={400}
      onClick={props.onClick}
      loading='lazy'
    ></Image>
  );
};

export default ImageOpt;
