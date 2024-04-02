import React from "react";

export const LoadingSkeleton = () => {
  const numPlaceholders = 5;

  const placeholders = Array.from({ length: numPlaceholders }, (_, index) => (
    <span key={index} className="loading-placeholder"></span>
  ));

  return (
    <>
      <div className="header-placeholder"></div>

      <div className="loading-placeholder-container">{placeholders}</div>
    </>
  );
};

export default LoadingSkeleton;
