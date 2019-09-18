import * as React from 'react';
import './hello.css';
export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
function Hello({ name, enthusiasmLevel = 1 , onIncrement, onDecrement}: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}<button onClick={clickme}>clickme</button>
      </div>
    </div>
  );
}

export default Hello;

// helpers
function clickme(){
}
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}