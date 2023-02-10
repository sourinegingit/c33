import React from 'react'
import styled from "styled-components";
import axios from 'axios';


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
    const handleCreateTodo=(e)=>{
        e.preventDefault();
        axios.post('')
    }
    return(
        <FORM>
            <INPUT type='text' placeholder='write task' />
            <BUTTON onClick={(e)=>handleCreateTodo(e)}>➕</BUTTON>
        </FORM>
    )

}
export default TODOFORM