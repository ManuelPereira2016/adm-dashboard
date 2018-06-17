import React from "react";
import MDSpinner from "react-md-spinner";

const PageLoading = () => {
  return (
    <div className="loading-screen">
      <MDSpinner size={100} />
    </div>
  );
};

export default PageLoading;
