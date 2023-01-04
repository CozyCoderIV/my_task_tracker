import React, { useState, useEffect } from 'react'
import { BsXCircle } from "react-icons/bs";
import '../../src/App.css'

function ListItem(props) {
  return (
    <div>
      <li className='list_item'>
          <div className= "item_text_container">
            <h3 className='item_text'>{props.name}</h3>
          </div>
          <button id='check' onClick={() => props.rmvtask(props.id)}><BsXCircle/></button>
      </li>
    </div>
  )
}

export default ListItem