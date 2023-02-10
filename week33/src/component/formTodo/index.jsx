import React, { useContext, useState } from 'react'
import styled from "styled-components";
import axios from 'axios';
import { Store } from '../../context';
import { getTodos } from '../../App';


const FORM= styled.form`
width:50%;
heigth:100vh;
background:white;
border-radius:2px;
display:flex;
margin:auto;
justify-content:space-between;
`
const INPUT=styled.input`
width:70%;
border:none;
height:fit-content;
padding:1rem;
`
const BUTTON=styled.button`
background:orange;
border:none;
`

const TODOFORM=()=>{
    const {inputValue,setInputValue,setTodo}=useContext(Store);
    const handleCreateTodo=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/todos',{
            "id": Math.random()*10,
            "title": inputValue,
            "check": "false"
        }).then(()=>{
            getTodos(setTodo)
        })
       
    }
    // console.log(task)
    return(
        <FORM>
            <INPUT type='text' placeholder='write task' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <BUTTON onClick={(e)=>handleCreateTodo(e)}>➕</BUTTON>
        </FORM>
    )

}
export default TODOFORM