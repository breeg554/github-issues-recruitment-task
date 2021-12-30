import { CSSProperties, useState } from "react";

interface ImageStyle {
  thumbnail: CSSProperties;
  fullSize: CSSProperties;
}

interface ImageOnLoadType {
  handleImageOnLoad: () => void;
  css: ImageStyle;
}

const useImageOnLoad = (): ImageOnLoadType => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleImageOnLoad = () => {
    setIsLoaded(true);
  };

  const css: ImageStyle = {
    thumbnail: {
      visibility: isLoaded ? "hidden" : "visible",
      // filter: "blur(0.1px)",
      // transition: "visibility 0ms ease-out 500ms",
    },

    fullSize: {
      opacity: isLoaded ? 1 : 0,
      // transition: "opacity 500ms ease-in 0ms",
    },
  };

  return { handleImageOnLoad, css };
};

export default useImageOnLoad;
//https://usehooks-ts.com/react-hook/use-image-on-load