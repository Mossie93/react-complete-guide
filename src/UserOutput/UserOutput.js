import React from 'react';

const userOutput = (props) => {
  return (
    <div>
      <p>This is my super user-provided text: {props.userName}</p>
    </div>
  );
}

export default userOutput;