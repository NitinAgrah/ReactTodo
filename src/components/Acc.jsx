import React from "react"
import { useState } from "react"
import { quests } from "./Api"
import MyAcc from "./MyAcc"
import "../styles/App1.css"
const Acc = () => {
    const [data, setData] = useState(quests);
    const centerBoxStyle = {
     width: "80%",
     height: "150px",
    
     position: "absolute",
     top: "1%",
        left: "10%",
        padding: "10px",
    }
    return (
     <>
      <div style={centerBoxStyle}>
       <h1 className="glass-title">React Questions</h1>
       {data.map((curElem) => {
        const { id } = curElem
        return <MyAcc key={id} {...curElem} />
       })}
      </div>
     </>
    )
}

export default Acc
