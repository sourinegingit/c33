import { useEffect, useState } from 'react';
import './App.css';
import TASKS from './component/tasks';
import { Store } from './context';
import axios from 'axios';

export const getTodos=(setter)=>{
  const todos=axios.get('http://localhost:3001/todos').then(response=>response.data)
  todos.then(todo=> setter(todo))
  // console.log(todos);
  
}

function App() {
  const [todo,setTodo]=useState([])
  const[inputValue,setInputValue]=useState('')
 
useEffect(()=>{
  
getTodos(setTodo);

},[])
  return (
    
    <div className="App">
      <Store.Provider value={{todo,setTodo,inputValue,setInputValue}}>
              <TASKS />
      </Store.Provider>
    </div>
  );
}

export default App;
