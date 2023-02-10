import React from "react";
import styled from "styled-components";
import { BsCheckSquareFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
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
function TodoItem({item}) {
  return (
    <Div>
      <P>{item.title}</P>
      <DIV>
        <BsCheckSquareFill style={{ background: "#" }}></BsCheckSquareFill>
        <BsFillTrashFill style={{ background: "#ffffff" }}></BsFillTrashFill>
      </DIV>
    </Div>
  );
}

export default TodoItem;
