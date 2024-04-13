import React,{useEffect,useState,useRef} from 'react'
 
const CountEample = () => {
    const [input,setInput] = useState("")
    // const [count,setCount] = useState(0) // causing infinite re-render 
    const count = useRef(0)
    useEffect(()=>{
        // setCount(count+1)// causing infinite re-render 
        count.current = count.current+1
    })
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        {/* <h1>The component Re-render = {count}</h1> // causing infinite re-render */}
        <h1>The component Re-render = {count.current}</h1>
    </div>
  )
}

export default CountEample