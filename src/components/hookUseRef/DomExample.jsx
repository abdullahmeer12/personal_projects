import React,{useRef} from 'react'

const DomExample = () => {
    const inputRef = useRef()
   const clickHandler = () => {
     inputRef.current.focus();
     inputRef.current.style.backgroundColor="#6c6c6c"   
     inputRef.current.style.color= "white"   
    }
  return (
    <div>
         <input type="text" ref={inputRef}  />
         <h1 style={{cursor:"pointer"}} onClick={clickHandler}>Click Me</h1>
    </div>
  )
}

export default DomExample