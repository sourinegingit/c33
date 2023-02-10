import React, { useState } from "react";
import styled from "styled-components";
import { BsCheckSquareFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import {RxCross1} from 'react-icons/rx'
const P = styled.p`
fontsize:1.5rem;
background:white;



`;
const Div = styled.div`
width:100%;
background:white;
display:flex;
align-items:center;
justify-content:space-between;
gap:2rem;
margin-bottom:2rem;
padding:2%;


`;
 const DIV=styled.div`
 display:flex;
 gap:4%

 `
function TodoItem({item,onCheckHandler,onDeleteHandler}) {
  return (
    <Div>
      <P>{item.title}</P>
      <DIV>
        { !item.check ?
          (<BsCheckSquareFill style={{ background: '#fffff' }}
        onClick={()=>{onCheckHandler(item)}}>
          
         </BsCheckSquareFill>):
         (
        <RxCross1 style={{ background: "#ggggg" }} 
        onClick={()=>{onCheckHandler(item)}}
        />

       
         )}

         

        <BsFillTrashFill style={{ background: "#ffffff" }}
         onClick={()=>onDeleteHandler(item)}></BsFillTrashFill>

         
      </DIV>
    </Div>
  );
}

export default TodoItem;
