import React, { useState } from 'react'

const Calc = () => {
    const [result,setResult]=useState(0);
    const add=()=>{
        const number1=parseFloat(document.getElementById('num1').value);
        const number2=parseFloat(document.getElementById('num2').value);
        const sum=number1+number2;
        setResult(sum)
    }
        const sub=()=>{
        const number1=parseFloat(document.getElementById('num1').value);
        const number2=parseFloat(document.getElementById('num2').value);  
        const diff=number1-number2;
        setResult(diff)
    }
    const product=()=>{
        const number1=parseFloat(document.getElementById('num1').value);
        const number2=parseFloat(document.getElementById('num2').value);  
        const mul=number1*number2;
        setResult(mul)
    }
    const division=()=>{
        const number1=parseFloat(document.getElementById('num1').value);
        const number2=parseFloat(document.getElementById('num2').value);  
        const div=number1/number2;
        setResult(div)
    }
    
    
        
    
  return (
    <div className='Maindiv'>
        <h1 style={{}}>Simple Calc</h1>
    Enter value1:<input type="number" id="num1"/><br></br><br></br> 
    Enter value2:<input type="number" id="num2"/><br></br><br></br> 
    <button onClick={add}>+</button>
    <button onClick={sub}>-</button>
    <button onClick={product}>*</button>
    <button onClick={division}>/</button>
    <p>Result is:{result}</p>
       </div>
  )
}

export default Calc
