import { useState } from "react";
const intialUserInput = {
    'current-savings':10000,
    'yearly-contribution' :1200 ,
    'expected-return' :7,
    'duration':10
}

export const UserInput = (props) => {
    const[userInput , setUserInput] = useState(intialUserInput)
    const submitHandler = (event) =>{
        event.preventDefault();
        props.onCalculate(userInput) ;
    }
    const resetHandler = () =>{
        setUserInput(intialUserInput)
    }
    const inputChangeHandler = (input , value) => {
        setUserInput((prevInput)=>{
            return{
                ...prevInput,
                [input] :value,
            }
        })
    }
  return (
    <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input onChange={(event)=> inputChangeHandler('current-savings',event.target.value)} type="number"
            value={userInput['current-savings']} id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input onChange={(event)=> inputChangeHandler('yearly-contribution',event.target.value)} type="number"  
            value={userInput['yearly-contribution']}    
            id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input onChange={(event)=> inputChangeHandler('expected-return',event.target.value)} type="number" 
            value={userInput['expected-return']} 
            id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange={(event)=> inputChangeHandler('duration',event.target.value)} type="number"
            value={userInput['duration']}
             id="duration" />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
  )
}
