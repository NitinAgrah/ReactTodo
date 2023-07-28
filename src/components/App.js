import { useState } from "react"
import React from "react"
import TodoList from "./TodoList"
const App = () => {
 const [inputList, setInputList] = useState("")
 const itemEvent = (event) => {
  setInputList(event.target.value)
 }

 const [item, setItem] = useState([])

 const deleteItem = (id) => {
  setItem((oldItem) => {
   return oldItem.filter((arrElem, index) => {
    return index !== id
   })
  })
 }

 const listOfItem = () => {
  setItem((oldItem) => {
   return [...oldItem, inputList]
  })
  setInputList("")
 }
 return (
  <>
   <h1>to do list</h1>
   <input
    type="text"
    value={inputList}
    placeholder="enter"
    onChange={itemEvent}
   ></input>
   <button type="submit" onClick={listOfItem}>
    Submit
   </button>
   <br></br>
   <ol>
    {item.map((itemvalue, index) => {
     return (
      <TodoList text={itemvalue} id={index} key={index} onSelect={deleteItem} />
     )
    })}
   </ol>
  </>
 )
}

export default App
