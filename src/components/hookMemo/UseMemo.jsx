import React,{ useMemo, useState } from "react" 


var arr = new Array(20000).fill(0).map((item,key)=>{
    return{
        index: key,
        ismegical : key === 19000
    }
})
const MemoHook = () => {
    const [count,setCount] = useState(0)
    const [text,setText] = useState(false)
    const [arrValue,setArrValue] = useState(arr)
    
   
    const magiMemo = useMemo(()=>{
        console.log(arrValue.find(item=> item.ismegical == true))
        return  arrValue.find(item=> item.ismegical == true)
        
    },[])
   
   
    const countHandler = () =>{
       return  setCount(count+1)
    }
   

// const GetCountTxt = ()=>{ // when we calling simple func it run on every chnage in Comp
    //     return emptyFunc(count)
    // }

    const textHandler = () => {
        setText(!text)
    }

  return (
    <div>
        <h3>magical value index {magiMemo.index}</h3>
        <h4 style={{cursor:"pointer"}} onClick={countHandler}>counter +1</h4>
        <h3>counter Number {count}</h3>
        <h4 style={{cursor:"pointer"}} onClick={textHandler}>{text ? "button Clicked":"click me Plz"}</h4>
    </div>
  )
}

export default MemoHook