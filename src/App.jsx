
import { useState } from 'react';
import './App.css'

function App() {
  const [inputList , setInputList] = useState("");
  const[Items , setItems] = useState([]);

const itemEvent=(e)=>
{
    setInputList(e.target.value);
}

const listOfItems =()=>{
    setItems((oldItems)=>{
    return [...oldItems,inputList];
    });
    setInputList("");
}

  return (
    <>
       <div className='page'>
          <div className='set-page'>
           <div className='main-page'>
             <h1>To-Do List</h1>
             <input type='text'
              placeholder='Add a Item!'
              onChange={itemEvent}
              value={inputList} 
             ></input>
             <button onClick={listOfItems}>+</button>
             </div>
          </div>
          <ol>

             { Items.map ((itemval) =>{
                 return <li> {itemval} </li>
              })}

          </ol>
       </div>
    </>
  )
}

export default App;
