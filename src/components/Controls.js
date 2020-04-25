import React from 'react';
import Button from './Button';

const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '='];

const Controls = ({ onMyClick }) => {
  const myOnClick = (value) => {
    onMyClick(value);
  };

  return (
    <div className='calculator-controls'>
      {buttons.map((btn) => (
        <Button key={btn} value={btn} myOnClick={myOnClick} />
      ))}
    </div>
  );
};

export default Controls;
