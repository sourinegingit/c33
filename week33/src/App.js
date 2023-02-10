import { useEffect, useState } from 'react';
import './App.css';
import TASKS from './component/tasks';
import { Store } from './context';
import axios from 'axios';

function App() {
  const [todo,setTodo]=useState([])
  const getTodos=()=>{
    const todos=axios.get('http://localhost:3001/todos').then(response=>response.data)
    todos.then(todo=> setTodo(todo))
    // console.log(todos);
    
}
useEffect(()=>{
getTodos();
},[])
  return (
    
    <div className="App">
      <Store.Provider value={{todo,setTodo}}>
              <TASKS/>
      </Store.Provider>
    </div>
  );
}

export default App;
