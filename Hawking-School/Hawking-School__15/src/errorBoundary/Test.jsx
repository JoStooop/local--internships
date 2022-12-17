import React from 'react';
import ErrorBoundary from "./ErrorBoundary.jsx";
import ErrorButton from "./ErrorButton.jsx";

const Test = () => {
  return (
    <>
      <div>Lorem ipsum.</div>
      <div>Lorem ipsum.</div>
      <div>Lorem ipsum.</div>
      <ErrorBoundary>
        <ErrorButton/>
      </ErrorBoundary>
    </>
  );
};

export {Test};
