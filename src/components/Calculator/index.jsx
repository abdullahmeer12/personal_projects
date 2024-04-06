import React, { useState } from "react";
import { CiCalculator1 } from "react-icons/ci";
import "./index.css";

const Calculator = () => { 
    const [result , setResult] = useState("");  

    const getValue = (event) =>{ 
     var newValue =  (result || "").concat(event.target.value).toString() 
     console.log(typeof newValue)
        if (newValue.length > 12) {
          alert("Number limit exceeded (12 characters maximum)");
      } else {
          setResult(newValue);
      }
    }
    const clearDisplay = () =>{
        setResult("")
    }   
    const calculate = () => {
        if(result.length>0){
          var calculatedResult = eval(result).toString()
          if(calculatedResult.length>12){
            alert("Result is less than 12 characters");
          }else{
            setResult(calculatedResult);
          }
        }else{
          alert("No calculation to perform");
        }
    }  

  return (
    <div>
      <div className="wrapper">
        <div id="calculator">
          <div className="top">
            <span id="calculate" className="material-icons">
                <CiCalculator1/>
              Calculator
            </span>
          </div> 
          <input id="display" placeholder="0" value={result}  readOnly />
          <div id="keys">
            <button id="btndark" onClick={clearDisplay}>
              CE
            </button>
            <button  onClick={(e)=>getValue(e)} value={"7"} >7</button>
            <button onClick={(e)=>getValue(e)} value={"8"} >8</button>
            <button onClick={(e)=>getValue(e)} value={"9"} >9</button>
            <button id="btndark" onClick={(e)=>getValue(e)} value={"*"} >*</button>
            <button onClick={(e)=>getValue(e)} value={"4"} >4</button>
            <button onClick={(e)=>getValue(e)} value={"5"} >5</button>
            <button onClick={(e)=>getValue(e)} value={"6"} >6</button>
            <button id="btndark" onClick={(e)=>getValue(e)} value={"-"} >- </button>
            <button onClick={(e)=>getValue(e)} value={"1"} >1</button>
            <button onClick={(e)=>getValue(e)} value={"2"} >2</button>
            <button onClick={(e)=>getValue(e)} value={"3"} >3</button>
            <button id="btndark" onClick={(e)=>getValue(e)} value={"+"} >+ </button>
            <button onClick={(e)=>getValue(e)} value={"/"}>/</button>
            <button onClick={(e)=>getValue(e)} value={"0"}>0</button>
            <button id="btnlight" onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
