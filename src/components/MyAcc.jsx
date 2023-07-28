import React from "react"
import { useState } from "react"

const MyAcc = ({ ques, ans }) => {
 const styles = {
  glassButton: {
   width: "85%",
   display: "inline-block",
   padding: "14px 15px",
   border: "0",
   textDecoration: "none",
   borderRadius: "15px",
   backgroundColor: "rgba(255, 255, 255, 0.1)",
   border: "1px solid rgba(255, 255, 255, 0.1)",
   backdropFilter: "blur(30px)",
   fontSize: "14px",
   letterSpacing: "2px",
   cursor: "pointer",
   textTransform: "uppercase",
  },
 }
const sty = {
 glassPanel: {
  color: "black",
  margin: "10px auto",
  backgroundColor: "rgba(255, 255, 255, 0.06)",
  border: "1px solid black",
  width: "100%",
  width: "100%",

  borderRadius: "15px",
  padding: "12px",
  backdropFilter: "blur(10px)",
 },
}
 const [show, setShow] = useState(false)
 return (
  <>
   
   <div style={sty.glassPanel}>
    <span>
     <button onClick={() => setShow(!show)} style={styles.glassButton}>
      <div>
            <b>{ show ? "" : "+" } { ques }</b> 
             <hr></hr>
      </div>
     </button>
     <br></br>
       </span>
    {show && <p>{ans}</p>}
   </div>
  </>
 )
}

export default MyAcc
