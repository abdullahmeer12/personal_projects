import { createContext } from "react";

const Context = createContext()

const AppProvide = ({childern}) =>{
    const obj={
        name:"abdullah",
        fatherName : "Mir Muhammad"
    }
    return(
        <Context.Provider value={obj}>
            {childern}
        </Context.Provider>
    )
}  

export {Context,AppProvide}