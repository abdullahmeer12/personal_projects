import { createContext } from "react";

const Context = createContext()

const AppProvide = ({children}) =>{
    var obj = {
        name:"Abdullah",
        father:"Mir Muhammad"
    }
    return(
        <Context.Provider value={obj}>
            {children} 
        </Context.Provider>
    )
}

export {Context,AppProvide}