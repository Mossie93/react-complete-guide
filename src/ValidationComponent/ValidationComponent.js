import React from 'react';

const validationComponent = (props) => {
  let validationMessage='Text too short!';

  if(props.textToValidate.length >= 5) {
    validationMessage='Text long enough';
  }

  return(
    <div>
      {validationMessage}
    </div>
  );
};

export default validationComponent;