import { useEffect, useState } from "react";
import Field from "./components/Field/Field";
import NextMove from "./components/NextMove/NextMove";
import Result from "./components/Result/Result";
import StartOver from "./components/StartOver/StartOver";

function shouldShowStartOver(status) {
  return status !== 0;
}

function App() {
  const [status, setStatus] = useState(0);
  const [move, setMove] = useState(1);
  const [field, setField] = useState((new Array(9)).fill(''));

  function checkDraw() {
    return field.every(cell => cell !== '');
  }

  function checkSequence(index1, index2, index3) {
    return field[index1] !== '' && field[index1] === field[index2] && field[index1] === field[index3];
  }

  function checkWinner() {
    if (checkSequence(0, 1, 2)) return field[0];
    if (checkSequence(3, 4, 5)) return field[3];
    if (checkSequence(6, 7, 8)) return field[6]; 
    if (checkSequence(0, 3, 6)) return field[0];
    if (checkSequence(1, 4, 7)) return field[1];
    if (checkSequence(2, 5, 8)) return field[2];
    if (checkSequence(0, 4, 8)) return field[0];
    if (checkSequence(2, 4, 6)) return field[2];
    return '';
  }

  useEffect(() => {
    const winner = checkWinner();
    if (winner === 'X') setStatus(2);
    else if (winner === '0') setStatus(3);
    else if (checkDraw()) setStatus(1);
  }, [move]);

  function resetGame() {
    setMove(1);
    setStatus(0);
    setField((new Array(9)).fill(''));
  }

  function updateField(index) {
    const cell = move % 2 === 0 ? '0' : 'X';
    const fieldCopy = field.slice();
    fieldCopy[index] = cell;
    setField(fieldCopy);
    setMove(move + 1);
  }

  return (
    <div className="app">
      <NextMove move={move} />
      <Field field={field} updateField={updateField} /> 
      <Result status={status} field={field} />
      {shouldShowStartOver(status) && <StartOver resetGame={resetGame} />}
    </div>
  );
}

export default App;
