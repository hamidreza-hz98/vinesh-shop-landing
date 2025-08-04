import Image from "next/image";
import React from "react";


const Banner = ({ src, alt, className="" }) => {
  return (
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className={`w-full h-full ${className}`}
      />
  );
};

export default Banner;
