import React, {useState, useEffect} from 'react';
import astronaut from '../src/media/purple_worker.png';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);
  const [highlight, setHighight] = useState(false);
  const listItem = {
    id: counter,
    name : text,
    clicked: false
  }
  let removeButton = document.getElementById('rmv');

  // Debug Console Print
  console.log(items, text, counter, highlight);

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
  const removeTask = () => {
    console.log(items, text, counter);
    let rItem = items.find((item) => item.clicked === true);
    setCounter(prev => prev - 1);
    setItems((prev) => {
      return prev.filter((item) => item !== rItem);
    });
    setHighight(false);
  }
  const clearList = () => {
    console.log(items, text, counter);
    setCounter(0);
    setItems([]);
  }
  useEffect(()=>{
    if(highlight){
      removeButton.className = "button_on";
    }
    else if(counter < 1){
      removeButton.className = "button_a";
    }
  });


  return (
    <div className="App">
      <h1 id='title'>To Do List</h1>
      <input id="input" value={text} onChange={handleChange}/>
      <div id='button_container'>
        <button className="button_a" onClick={addTask}><h3>Add Task</h3></button>
        <button className="button_a" id='rmv' onClick={removeTask}><h3>Remove Task</h3></button>
        <button className="button_a" onClick={clearList}><h3>Clear List</h3></button>
      </div>

      {/* To Do List */}
      <div id='list_container'>
        <ul id="list">
          {items.map((item) => <li className='list_item' name={item.name} onClick={() => {item.clicked = true; setHighight(true);}}>
                               <h2>{item.name}</h2></li>)}
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
