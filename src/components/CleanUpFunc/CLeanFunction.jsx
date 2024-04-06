import React ,{useEffect,useState}from 'react'

const CLeanFunction = () => {
    const[windowWidth,setWindowWidth] = useState(window.innerWidth)
    const resizeFunc = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(()=>{
         window.addEventListener("resize", resizeFunc)
         // here is cleanup function which we can use in useeffect hook 
         return ()=>{
            window.addEventListener("resize", resizeFunc)
         }
    })
  return (
    <div>
        <h1>You window width <strong> {windowWidth}</strong></h1>
    </div>
  )
}

export default CLeanFunction