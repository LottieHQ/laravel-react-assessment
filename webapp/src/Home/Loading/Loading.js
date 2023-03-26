import React, { useEffect } from "react";

import { LoadingImage } from "./loadingStyles";

const Loading = ({ children, loaded, handleLoaded }) => {
  useEffect(() => {
    if (!loaded) {
      handleLoaded();
    }
  });

  return loaded ? children : <LoadingImage />;
};
export default Loading;
