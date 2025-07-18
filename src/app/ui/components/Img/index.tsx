"use client";
import React, { useRef } from "react";
import { useEffect, useState } from "react";

export interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: "full" | "normal";
}

// const Img = React.forwardRef<HTMLImageElement, ImgProps>(
const Img = ({ ...props }: ImgProps) => {
  const [errorImg, setErrorImg] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const imgEle = imgRef.current;
    if (imgEle && imgEle.complete && imgEle.naturalWidth === 0) {
      imgEle.src = "/meeting/No-Image.png";
      setErrorImg(true);
    }
  }, []);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "/meeting/No-Image.png";
    setErrorImg(true);
  };

  return (
    <img
      onError={(e) => {
        handleError(e);
      }}
      src={errorImg ? "/meeting/No-Image.png" : props.src}
      alt={props.alt}
      ref={imgRef}
      referrerPolicy='no-referrer'
      loading='lazy'
      {...props}
    />
  );
};

export default Img;
