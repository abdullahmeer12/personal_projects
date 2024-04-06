 
import { useContext } from 'react';
import './App.css';
import Calculator from "./components/Calculator"
import Person from './components/ClassComp'
import FormHandling from "./components/FormHandling"
import CLeanFunction from './components/CleanUpFunc/CLeanFunction';
import {Context} from './components/useContext/MyContext'

function App() {

  const data = useContext(Context)
  const {name,fatherName} = data
  console.log(name)
  return (
    <div className="App">
      <h1>APP Comp</h1>
      {/* <Person/> */}
      {/* <Calculator/> */}
      {/* <FormHandling/> */}
      {/* <CLeanFunction/> */}
    </div>
  );
}

export default App;
