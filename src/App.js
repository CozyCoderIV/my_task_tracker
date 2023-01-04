import React, {useState, useEffect} from 'react';
import astronaut from '../src/media/purple_worker.png';
import ListItem from './components/ListItem';
import { BsXCircle } from "react-icons/bs";
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);
  const listItem = {
    id: counter,
    name : text,
    clicked: false
  }

  // Debug Console Print
  console.log(items, text, counter);

  // Methods
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const addTask = () => {
    console.log(items, text, counter);
    setCounter(prev => prev + 1);
    setItems([...items, listItem]);
    setText('');
  }
  const removeTask = (target) => {
    console.log(items, text, counter);
    setCounter(prev => prev - 1);
    setItems((prev) => {
      return prev.filter((item) => item.id !== target);
    });
  }
  const clearList = () => {
    console.log(items, text, counter);
    setCounter(0);
    setItems([]);
  }


  return (
    <div className="App">
      <h1 id='title'>To Do List</h1>
      <input id="input" value={text} onChange={handleChange}/>
      <div id='button_container'>
        <button className="button_a" onClick={addTask}><h3>Add Task</h3></button>
        <button className="button_a" onClick={clearList}><h3>Clear List</h3></button>
      </div>

      {/* To Do List */}
      <div id='list_container'>
        <ul id="list">
          {items.map((item) => <ListItem name={item.name} rmvtask={removeTask} id={item.id}/>)}
          {/* {items.map((item) => <li className='list_item'>
                  <div className= "item_text_container">
                    <h3 className='item_text'>{item.name}</h3>
                  </div>
                  <button id='check' onClick={() => removeTask(item.id)}><BsXCircle/></button></li>)} */}
        </ul>
        <div id='A'>
          <img className='astro' src={astronaut}></img>
        </div>
        <div id='B'>
          <img className='astro' src={astronaut}></img>
        </div>
      </div>

    </div>
  );
}

export default App;
