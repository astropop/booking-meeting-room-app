import Image from "next/image";
import { useState } from "react";

export type Imagenew = {
  src: string;
  fallback: string;
  alt: string;
};

const ImageOpt = ({
  src,
  alt,
  fallback = "/meeting/No-Image.png",
}: Imagenew) => {
  const [imageError, setImageError] = useState(false);
  return (
    <Image
      src={imageError ? fallback : src}
      alt={alt}
      width={512}
      height={911}
      style={{ width: "30%", height: "auto" }}
      onError={() => setImageError(true)}
    ></Image>
  );
};

export default ImageOpt;
