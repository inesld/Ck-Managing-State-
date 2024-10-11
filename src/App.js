import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import ListTodos from './components/ListTodos';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      done: false,
      text: 'learn react',
    },
    {
      id: 2,
      done: false,
      text: 'learn node',
    },
  ]);

  //add new todo
  const addTodo=(newTodo)=>{
    setTodos([...todos,newTodo])
  }

  // delete todo
  
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

// done todo
const doneTodo=id=>{
  setTodos(todos.map(todo=> (todo.id === id  ? {...todo, done: !todo.done}:todo )))
}

// edit todo
const editTodo=(id, newText)=>{
  setTodos(todos.map(todo=> (todo.id === id  ? {...todo, text: newText}:todo )))
}

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <ListTodos todos={todos} deleteTodo={deleteTodo} doneTodo={doneTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
