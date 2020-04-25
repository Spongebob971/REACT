import React, { useState } from 'react';
import Display from './Display';
import Controls from './Controls';

const Calculator = () => {
  const [value, setValue] = useState('');
  const [tmpValue, setTmpValue] = useState(0);

  const onMyClickParent = (val) => {
    setValue(val);

    switch (val) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        setValue(`${value}${val}`);
        break;
      case '+':
        setTmpValue(tmpValue + +value);
        setValue('');
        break;
      case '-':
        setTmpValue(tmpValue - +value);
        setValue('');
        break;
      case '/':
        setTmpValue(tmpValue / +value);
        setValue('');
        break;
      case '*':
        setTmpValue(tmpValue * +value);
        setValue('');
        break;
      case '=':
        setValue(tmpValue);
        setTmpValue(0);
        break;
      default:
        setValue('ERROR');
    }
  };

  return (
    <div className='calculator-wrapper'>
      Calculator
      <Display value={value} />
      <Controls onMyClick={onMyClickParent} />
    </div>
  );
};

export default Calculator;
