import React from 'react';

const Button = ({ value, myOnClick }) => {
  return (
    <div className='calculator-button' onClick={() => myOnClick(value)}>
      {value}
    </div>
  );
};

export default Button;
