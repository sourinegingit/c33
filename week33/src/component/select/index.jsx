import React from 'react'
import styled from "styled-components";

const SELECT=styled.select`
width:50%

`

function Filter({onFilterHandler}) {

  return (
    <SELECT onChange={(e)=>onFilterHandler(e.target.value)}>
        
        <option value='ALL'>ALL</option>
        <option value='DONE'>DONE</option>
        <option value='ON GOING'>ON GOING</option>
    </SELECT>
      
    
  )
}

export default Filter
