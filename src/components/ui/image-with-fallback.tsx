"use client";

import React, { useState } from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

interface ImageWithFallbackProps extends Omit<ImageProps, "src"> {
  src: string | StaticImageData;
}

/** External URLs bypass Next.js server optimization - browser fetches directly, no server load on 404 */
const isExternalUrl = (src: string | StaticImageData): src is string =>
  typeof src === "string" && src.startsWith("http");

/**
 * Image component that shows a customizable fallback when the upstream image fails to load.
 * Use this instead of Next.js Image when the image source may be unreliable (external URLs, etc).
 * External URLs use unoptimized to avoid server load when images return 404.
 */
const ImageWithFallback = ({
  src,
  alt,
  onError,
  ...props
}: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setHasError(true);
    onError?.(e);
  };

  const pathname = usePathname();
  const isWhy = /\/why\/\d+\/[a-z0-9-]+/.test(pathname);

  return (
    <div>
      {hasError ? (
        <div
          className={`flex items-center justify-center flex-col text-red-500 space-y-1 bg-red-500/5 rounded-md ${isWhy ? "aspect-square" : "w-32 h-32"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
          <p className="text-xs">Image not found</p>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          onError={handleError}
          unoptimized={isExternalUrl(src)}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithFallback;
