import React, { useEffect } from "react";

const Loading = ({ children, loaded, handleLoaded }) => {
  useEffect(() => {
    console.log(loaded);
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
