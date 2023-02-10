import React from 'react'
import styled from "styled-components";

const SELECT=styled.select`
width:50%

`

function Filter() {
  return (
    <SELECT >
        <option value='ALL'>ALL</option>
        <option value='DONE'>DONE</option>
        <option value='ON GOING'>ON GOING</option>
    </SELECT>
      
    
  )
}

export default Filter
