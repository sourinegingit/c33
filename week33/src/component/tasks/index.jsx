import React, { useContext } from "react";
import styled from "styled-components";
import { Store } from "../../context";
import TODOFORM from "../formTodo";
import Filter from "../select";
import TodoItem from "../todoItem";


const COUNTAINER = styled.div`
  background: lightblue;
  width: 80%;
  margin: 2% auto;
  padding: 1rem;

  h1 {
    color: white;
  }
`;
const DIV = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
const TodoWrapper = styled.div`

  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  flex-direction:column;
  padding: 2%;
`;
function TASKS() {
  const {todo}=useContext(Store);
// console.log(todo)

  return (
    <COUNTAINER>
      <h1>TASKS</h1>
      <DIV>
        <TODOFORM />
        <Filter />
      </DIV>
      <TodoWrapper>
        {todo.map((item)=> <TodoItem item={item}/>
 )}
      </TodoWrapper>
    </COUNTAINER>
  );
}

export default TASKS;
