import React from "react"

const TodoList = (props) => {
 return (
  <>
   <button
    onClick={() => {
     props.onSelect(props.id)
    }}
   >
    Del
   </button>
   <li>{props.text}</li>
  </>
 )
}

export default TodoList
