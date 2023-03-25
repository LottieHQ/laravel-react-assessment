import React, { useEffect } from "react";

const Loading = ({ children, loaded, list, handleLoaded }) => {
  useEffect(() => {
    if (!loaded) {
      handleLoaded();
    }
  });

  return loaded ? (
    children
  ) : (
    <div>
      <p>Loading...</p>
    </div>
  );
};
export default Loading;
