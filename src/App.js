 
import { useContext } from 'react';
import './App.css';
import Calculator from "./components/Calculator"
import Person from './components/ClassComp'
import FormHandling from "./components/FormHandling"
import CLeanFunction from './components/CleanUpFunc/CLeanFunction';
import {Context} from './components/useContext/MyContext'
import Reducer from './components/reducers/Reducer';
import CountEample from './components/hookUseRef/CountEample';
import DomExample from './components/hookUseRef/DomExample';
import LayoutEffect from './components/hookLayoutEffect/LayoutEffect';
import MemoHook from './components/hookMemo/UseMemo';

function App() { 
  //  context Api example 
  //  const data = useContext(Context)
  //  const {name,father} = data
  
  return (
    <div className="App"> 
      <h1>App Component</h1>
      <MemoHook/>
      {/* <LayoutEffect/>
      <DomExample/>
      <CountEample/>
      <Reducer/> 
      <h1>Hi My Name is {name} and My Father Name is {father}</h1>
      <Person/>
      <Calculator/>
      <FormHandling/>
      <CLeanFunction/> */}
    </div>
  );
}

export default App;
