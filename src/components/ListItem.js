import React, { useState } from 'react'
import '../../src/App.css'

function ListItem(props) {
  const [clicked, setClicked] = useState();
  const handleChange = () => {
    console.log("Clicked Item " + clicked);
    setClicked(true);
  }
  return (
    <li className='list_item'>
        <h2>{props.name}</h2>
    </li>
  )
}

export default ListItem