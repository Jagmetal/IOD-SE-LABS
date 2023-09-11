import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumChange = (e) => {
    const { name, value } = e.target;
    name === 'num1' ? setNum1(value) : setNum2(value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const calculateResult = () => {
    if (num1 === '' || num2 === '' || operator === '') {
      setResult('Invalid Input');
      return;
    }

    let resultValue;
    switch (operator) {
      case '+':
        resultValue = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        resultValue = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        resultValue = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        resultValue = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        resultValue = 'Invalid Operator';
    }

    setResult(resultValue);
  };

  const clearInputs = () => {
    setNum1('');
    setNum2('');
    setOperator('');
    setResult('');
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input type="number" name="num1" value={num1} onChange={handleNumChange} />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="">Select Operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" name="num2" value={num2} onChange={handleNumChange} />
      <button onClick={calculateResult}>Calculate</button>
      <button onClick={clearInputs}>Clear</button>
      <div>
        {result !== '' && <h2>Result: {result}</h2>}
      </div>
    </div>
  );
};

export default Calculator;
