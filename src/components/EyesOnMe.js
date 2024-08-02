// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
  // Event handler function for focus
  const handleFocus = () => {
    console.log('Good!');
  };

  // Event handler function for blur
  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <button 
      onFocus={handleFocus} 
      onBlur={handleBlur}
    >
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
