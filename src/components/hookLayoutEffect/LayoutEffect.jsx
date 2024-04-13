import React,{useEffect, useLayoutEffect, useState} from 'react'

const LayoutEffect = () => {

const [count,setCount] = useState(0);
    useLayoutEffect(()=>{
    if (count === 0) setCount(Math.random() * 100)
    })
  return (
    <div>
        <h1>The Random number is {count.toFixed(2)}</h1>
        <h4 style={{cursor:"pointer"}} onClick={()=>setCount(0)}>Clik ME</h4>
    </div>
  )
}

export default LayoutEffect