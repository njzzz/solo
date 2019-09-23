import * as React from 'react';
import './hello.scss';
import TodoList from './to-do-list';
export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
function Hello({ name, enthusiasmLevel = 1 , onIncrement, onDecrement}: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <div className="hello">
      <div className="greeting">
        <TodoList />
        Hello {name + getExclamationMarks(enthusiasmLevel)}<button onClick={onIncrement}>clickme</button>
      </div>
    </div>
  );
}



// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
export default Hello;