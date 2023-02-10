import axios from "axios";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Store } from "../../context";
import TODOFORM from "../formTodo";
import Filter from "../select";
import TodoItem from "../todoItem";
import { getTodos } from "../../App";

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
  flex-direction: column;
  padding: 2%;
`;
function TASKS() {
  const { todo, setTodo } = useContext(Store);

  // console.log(todo)
  const checkHandler = (item) => {
    const newTodoList = [...todo];
    const index = newTodoList.findIndex((todo) => todo.id === item.id);
    newTodoList[index].check = !newTodoList[index].check;
    // console.log(index)
    // console.log(item)
    // console.log(newTodoList[index].check)
    updateTodo(newTodoList[index].check, newTodoList[index].id);
    setTodo(newTodoList);
  };

  const updateTodo = (checkUpdate, id) => {
    axios.patch("http://localhost:3001/todos/" + id, {
      check: checkUpdate,
    });
  };
  const deleteTodo = (id) => {
    axios
      .delete("http://localhost:3001/todos/" + id)
      .then(() => getTodos(setTodo));
  };

  const deletHandler = (item) => {
    deleteTodo(item.id);
  };

  const filterHandler = (value) => {
    // console.log(value)
    const newTodo=[...todo]
    // console.log(newTodo)
    getTodos(setTodo)

    switch (value) {
      case "ALL":
        setTodo(todo)
        console.log(todo)
        return ;
      case "DONE":
        const doneTodos=newTodo.filter((item)=>item.check === true);
        setTodo(doneTodos)
        getTodos(setTodo)
        return;
      case "ON GOING":
        return;
      default:
        return value;
    }
  };
  return (
    <COUNTAINER>
      <h1>TASKS</h1>
      <DIV>
        <TODOFORM />
        <Filter onFilterHandler={filterHandler} />
      </DIV>
      <TodoWrapper>
        {todo.map((item) => (
          <TodoItem
            item={item}
            onCheckHandler={checkHandler}
            onDeleteHandler={deletHandler}
          />
        ))}
      </TodoWrapper>
    </COUNTAINER>
  );
}

export default TASKS;
