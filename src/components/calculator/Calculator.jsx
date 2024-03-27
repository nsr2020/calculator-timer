import "./Calculator.css"

import React, { useRef, useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const inputRef = useRef(null);

  const handleOperation = (op) => {
    setOperation(op);
    inputRef.current.focus();
  };

  const calculateResult = () => {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    let res;
    switch (operation) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num1 / num2;
        break;
      default:
        break;
    }
    res = parseFloat(res.toFixed(2));
    setResult(res);
    setHistory([...history, res].sort((a, b) => a - b));
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
  };

  const renderHistory = () => {
    return history.map((item, index) => (
      <li key={index}>{item % 1 === 0 ? parseInt(item) : parseFloat(item).toFixed(2)}</li>
    ));
  }

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <input
        type="text"
        value={operation ? secondNumber : firstNumber}
        onChange={(e) => operation ? setSecondNumber(e.target.value) : setFirstNumber(e.target.value)}
        ref={inputRef}
      />
        <div className="operaciones">
      <button className="mas" onClick={() => handleOperation('+')}>+</button>
      <button className="menos" onClick={() => handleOperation('-')}>-</button>
      <button className="mul" onClick={() => handleOperation('*')}>*</button>
      <button className="div" onClick={() => handleOperation('/')}>/</button>
        </div>
    
      <button className="result" onClick={calculateResult}>=</button>
      <p>Último resultado: {result}</p>
      <h3>Historial de resultados:</h3>
      <ul>{renderHistory()}</ul>
    </div>
  );
};

export default Calculator;