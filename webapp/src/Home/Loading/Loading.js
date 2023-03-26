import PropTypes from "prop-types";
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

Loading.propTypes = {
  children: PropTypes.node.isRequired,
  loaded: PropTypes.bool.isRequired,
  handleLoaded: PropTypes.func.isRequired,
};

export default Loading;
