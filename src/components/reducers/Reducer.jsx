import React,{ useReducer } from "react" 
import './index.css'
const initialValue = 0

const Reducer = () => { 
  const reducerfunc = (count,action) =>{
    switch(action.type){
      case "INC":
        return count+1
      break;
      case "DEC":
        let num = 0
        count > 1 ? (num = count-1 ) : num = 0
        return num
      break
      default:
        return count
      }

   
    
    // if(action.type === "INC"){
    //   return   count +1
    // }else if(action.type === "DEC"){
    //   return count -1
    // }
    // return count
  }
  const[count,dispatch] = useReducer(reducerfunc,initialValue)
  

  return (
    <div>
      <div className="container1">
        <button onClick={()=> dispatch({type:"DEC"})}>-</button>
        <h2>{count}</h2>
        <button onClick={()=>dispatch({type:"INC"})}>+</button>
    </div>
    </div>
  )
}

export default Reducer