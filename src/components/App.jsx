import React, { useState } from "react";

function App() {
  const [list,setList] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleCHange(event){
    const newValue = event.target.value;
    setList(newValue)
  }

  function handleClick(){
    setListItems(prevItems =>{
      return [...prevItems,list];
    })
    setList("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          onChange={handleCHange}
          type="text" 
          name="item" 
          value={list}
        />
        <button 
          type="submit" 
          onClick={handleClick}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          { listItems.map((todoItem) =>{
            return <li>{todoItem}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
