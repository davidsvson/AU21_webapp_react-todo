import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


const DoneButton = (props) => {
  const [done, setDone ] = useState(props.done);

  let todoDone = 'Ej klar';
  if (done === true) {
    todoDone = 'Klar';
  }

  return (
    <button onClick={() => setDone(!done) } > {todoDone} </button>
  )

}

const ToDoItem = (props) => {

  return (
    <li className="todo-item">{props.text}  <DoneButton done={props.done} /> </li>
  )
}

const AddItem = (props) => {
  const [input, setInput] = useState('');

  const addAndClear = () => {
    props.handleAdd(input);
    setInput('');
  }

  return (
    <div>
      <input type="text" value={input} onInput={e => setInput(e.target.value) } />
      <button onClick={ addAndClear }>Add</button>
    </div>
  )
}


function App() {
  // const item = {text: 'köp ost', done: false};
  // const defaultValue = [item]
  const [todoList, setTodoList] = useState([{text: 'köp ost', done: false}]);

  const todoItems = todoList.map((item, index) => (
    <ToDoItem text={item.text} done={item.done} />
  ))

  const addItem = (itemText) => {
    const newItem = {text: itemText, done: false};
    setTodoList([...todoList, newItem ]);
  }

  return (
     <div className="App">
      <header className="App-header">
       <h1>Todo app</h1>
      </header>
      <AddItem handleAdd={addItem}/>
      <ul className="todo-list">
          {todoItems}
      </ul>  
    </div>
  );
}

export default App;
