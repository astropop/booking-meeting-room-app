import Image from "next/image";
import { useState } from "react";

export type Imagenew = {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
};

const ImageOpt = ({
  src,
  alt,
  fallback = "/meeting/No-Image.png",
  className,
}: Imagenew) => {
  const [imageError, setImageError] = useState(false);
  return (
    <Image
      src={imageError ? fallback : src}
      alt={alt}
      width={512}
      height={911}
      className={className}
      onError={() => setImageError(true)}
    ></Image>
  );
};

export default ImageOpt;
